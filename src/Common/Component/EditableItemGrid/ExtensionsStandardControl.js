// import node modules
import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import find from 'lodash/find';
import get from 'lodash/get';
import isUndefined from 'lodash/isUndefined';
import isNull from 'lodash/isNull';
import * as math from 'mathjs';

// custom imports
import {
	memoizedProcessToastErrorMessage
} from '../../common';
import {
	processRules
} from './ExtensionsControl.logic';
import {
	getExtensionValidationMessages
} from './ExtensionsControl.validation';
import Numeral from '../General/Numeral';
import {
	Card,
	Checkbox,
	NumericFormatter,
	UDLSelect,
	TextInput
} from '../General';

// formats the currency and percentage fields in the extensions grid
class ExtensionsStandardControl extends React.PureComponent {
	// default state
	state = {
		extensionValidationMessages: [],
		isExtensionsLoading: false
	};

	// process logic on mounting of component 
	componentDidMount() {

		// update the risk extensions
		this.props.updateRiskExtensions(this.props.extensions);

		// initialise the extensions state
		this.initialiseExtensions();
	}

	// initialise the extensions state
	initialiseExtensions = async () => {
		// initialise variables
		let extensionResult = {};

		// update is loading flag
		this.setState({
			isExtensionsLoading: true
		});

		// retrieve the extensions
		try {
			extensionResult = await this.props.getExtensions(this.props.addressCnt, this.props.vehicleTypeId, this.props.ParentOIKey);
		}
		catch (error) {
			// display error in a toast message
			memoizedProcessToastErrorMessage('Extensions Error', `There was an error retrieving extensions (${error.message})`);
		}

		// validate extension result
		if (!isEmpty(extensionResult)) {
			this.setExtensionStateInitialisation(extensionResult);
		}
	}

	// updates the extension state
	setExtensionStateInitialisation = (extensions) => {
		// process default values
		extensions.Extensions.map((ext) => {
			this.props.extensionsConfig.defaultExtensionValues.map((dev) => {
				const fieldObject = find(ext.Fields, ['FieldName', dev.FieldId]);

				if (!isUndefined(fieldObject)) {
					if ((fieldObject.FieldValue === '' || isNull(fieldObject.FieldValue)) && !get(dev, 'DefaultFromState', false)) {
						fieldObject.FieldValue = dev.DefaultValue.toString();
					}
					else if ((fieldObject.FieldValue === '' || isNull(fieldObject.FieldValue)) && get(dev, 'DefaultFromState', false)) {
						fieldObject.FieldValue = get(this.props.riskState, dev.DefaultValue.toString(), '');
					}
				}
			});

			// process initial values
			const initalExtensionsConfiguration = get(this.props.extensionsConfig, 'initialExtensionValues', []);

			initalExtensionsConfiguration.map((dev) => {
				const fieldObject = find(ext.Fields, ['FieldName', dev.FieldId]);

				if (!isUndefined(fieldObject)) {
					if ((fieldObject.FieldValue === '' || isNull(fieldObject.FieldValue))) {
						fieldObject.FieldValue = dev.DefaultValue.toString();
					}
				}
			});
		})

		// retrieve extension validation rules
		const validationRules = this.props.extensionValidationRules();
		const validationMessages = getExtensionValidationMessages(extensions, validationRules, this.props.riskState);

		// add extensions, validation, and configuration to the state
		this.setState({
			extensionValidationMessages: validationMessages,
			isExtensionsLoading: false
		});

		// update the risk extensions
		if (isEmpty(this.props.extensions))
			this.props.updateRiskExtensions(extensions, this.props.extensionsConfig);

		// update progress bar validation
		this.props.handleExtensionsValidationUpdate(validationMessages.length > 0 ? '0' : '1');
	}

	// updates the state with the extension list
	handleUpdateExtensions = (extensionIndex, fieldIndex, value) => {
		// initialise variables
		let isRateExtensions = false;

		// update is loading flag
		this.setState({
			isExtensionsLoading: true
		});

		// clone the existing extension state
		let extensionsState = {...this.props.extensions};

		// verify which value should be amended and set it
		if (fieldIndex === null) {
			extensionsState.Extensions[extensionIndex].CheckboxChecked = value;
		}
		else {
			extensionsState.Extensions[extensionIndex].Fields[fieldIndex].FieldValue = value === '' ? '' : Numeral.unformat(value).toString();
		}

		// validate whether the extension should be rated via qrater
		if (this.props.extensionsConfig.qRaterExtensionTypes.includes(extensionsState.Extensions[extensionIndex].ExtensionType)) {
			isRateExtensions = true;
		}

		// process logic rules against the updated extension state
		if (fieldIndex !== null) {
			processRules(
				extensionsState.Extensions[extensionIndex].Fields[fieldIndex].FieldName,
				extensionsState,
				this.props.riskState,
				this.props.extensionsConfig.logicRules
			);
		}

		// process update logic
		if (isRateExtensions && !this.props.hasRateButton) {
			this.processRatedUpdateLogic(extensionsState);
		}
		else {
			this.processNonRatedUpdateLogic(extensionsState);
		}
	}

	// process extension logic when rating does not apply
	processNonRatedUpdateLogic = (extensionsState) => {
		// initialise variables
		let totalExtensionPremium = '0';
		let extensionType = '0';
		let totalBasePremium = '0';

		// process default values
		extensionsState.Extensions.map((ext) => {
			this.props.extensionsConfig.defaultExtensionValues.map((dev) => {
				const fieldObject = find(ext.Fields, ['FieldName', dev.FieldId]);

				if (!isUndefined(fieldObject)) {
					if ((fieldObject.FieldValue === '' || isNull(fieldObject.FieldValue)) && !get(dev, 'DefaultFromState', false)) {
						fieldObject.FieldValue = dev.DefaultValue.toString();
					}
					else if ((fieldObject.FieldValue === '' || isNull(fieldObject.FieldValue)) && get(dev, 'DefaultFromState', false)) {
						fieldObject.FieldValue = get(this.props.riskState, dev.DefaultValue.toString(), '');
					}
				}
			});

			// check if this is an item implemenation
			if (this.props.isItemImplementation ?? false) {
				let splitExtensionType = ext.CheckboxId.split('_');
				extensionType = splitExtensionType[splitExtensionType.length - 1];
			}
			else {
				extensionType = ext.ExtensionType;
			}

			// get base premium
			const totalBasePremiumField = find(ext.Fields, ['FieldName', `PREMIUM_${extensionType}`]);

			// get ri posting premium
			const riPostingField = find(ext.Fields, ['FieldName', `RI_POSTING_${extensionType}`]);

			// accumulate totals
			if (ext.CheckboxChecked) {
				const baseMathExpression = `${totalBasePremium} + ${isUndefined(totalBasePremiumField) ? '0' : totalBasePremiumField.FieldValue === '' ? '0' : totalBasePremiumField.FieldValue}`;
				const mathExpression = `${totalExtensionPremium} + ${isUndefined(riPostingField) ? '0' : riPostingField.FieldValue === '' ? '0' : riPostingField.FieldValue}`;

				totalBasePremium = math.eval(baseMathExpression);
				totalExtensionPremium = math.eval(mathExpression);
			}
		});

		// retrieve extension validation rules
		const validationRules = this.props.extensionValidationRules();
		const validationMessages = getExtensionValidationMessages(extensionsState, validationRules, this.props.riskState);

		// add extensions, validation, and configuration to the state
		this.setState({
			extensionValidationMessages: validationMessages,
			isExtensionsLoading: false
		})

		// update the risk extensions
		this.props.updateRiskExtensions(extensionsState);

		// update progress bar validation
		this.props.handleExtensionsValidationUpdate(validationMessages.length > 0 ? '0' : '1');

		// update total extension premium
		this.props.handleExtensionTotalUpdate(totalExtensionPremium.toString(), totalBasePremium.toString());
	}

	// process extension logic when rating does apply
	processRatedUpdateLogic = (extensionsState) => {
		// update is loading flag
		this.setState({
			isExtensionsLoading: true
		});
	//	debugger
		// update the bar extensions
		this.props.updateExtensions(extensionsState, this.props.extensionsConfig.extensionsToExclude, this.props.addressCnt, true, this.props.ParentOIKey)
			.then((extensionResult) => {
				// process update logic
				this.processNonRatedUpdateLogic(extensionResult);
			})
			.catch((error) => {
				// display error in a toast message
				memoizedProcessToastErrorMessage('Extensions Error', `There was an error updating extensions (${error.message})`);
			})
			.finally = () => {
				// update is loading flag
				this.setState({
					isExtensionsLoading: false
				});
			};
	}

	// processes the relevant field to display on the extensions control
	deriveExtensionField = (field, isExtensionChecked, extensionIndex, fieldIndex) => {
		// check to ensure the extension is not to be hidden
		if (!this.props.extensionsConfig.hiddenExtensionFields.includes(field.FieldName)) {
			// validate if this is a currency field to display
			if (field.FieldIsCurrency) {
				// process checked/unchecked functionality
				if (!isExtensionChecked) {
					return <TextInput
						inputId={field.FieldName}
						labelDescription=''
						inputSizes={['col-12']}
						isDisabled={true}
						isMandatory={false}
						value=''
						isValid={true}
						validationMessage=''
						handleOnChange={() => false}
					/>;
				}
				else {
					return <NumericFormatter
						inputId={field.FieldName}
						labelDescription=''
						inputSizes={['col-12']}
						numDecimals={field.FieldNumDecimals}
						defaultValue={field.FieldValue}
						value={field.FieldValue}
						handleOnNumericChange={(event) => {
							this.handleUpdateExtensions(extensionIndex, fieldIndex, event.target.value);
						}}
						isDisabled={
							!isExtensionChecked ||
							((this.props.disablePremiumField ?? true) && (!field.FieldDescription.includes('Posting') && field.FieldName.includes('PREMIUM_') && !field.FieldName.includes('MANUAL_PREMIUM_'))) ||
							this.props.extensionsConfig.disableExtensionFields.includes(field.FieldName) ||
							this.props.isLoading
						}
						prefix='R '
						suffix=''
						allowNegative={false}
						isMandatory={field.FieldRequired}
						validationMessage=''
						isValid={true}
						isLoading={this.state.isExtensionsLoading && field.FieldName.includes('PREMIUM_')}
					/>;
				}
			}

			// validate if this is a percentage field to display
			if (field.FieldIsPercentage) {
				// process checked/unchecked functionality
				if (!isExtensionChecked) {
					return <TextInput
						inputId={field.FieldName}
						labelDescription=''
						inputSizes={['col-12']}
						isDisabled={true}
						isMandatory={false}
						value=''
						isValid={true}
						validationMessage=''
						handleOnChange={() => false}
					/>;
				}
				else {
					return <NumericFormatter
						inputId={field.FieldName}
						labelDescription=''
						inputSizes={['col-12']}
						numDecimals={field.FieldNumDecimals}
						defaultValue={field.FieldValue}
						value={field.FieldValue}
						handleOnNumericChange={(event) => {
							this.handleUpdateExtensions(extensionIndex, fieldIndex, event.target.value !== '' ? (Numeral.unformat(event.target.value) * 100) : '0');
						}}
						isDisabled={!isExtensionChecked || this.props.extensionsConfig.disableExtensionFields.includes(field.FieldName) || this.props.isLoading}
						prefix=''
						suffix=' %'
						allowNegative={false}
						isMandatory={field.FieldRequired}
						validationMessage=''
						isValid={true}
					/>;
				}
			}

			// validate if this is a lookup field to display
			if (field.FieldListType === 'PMLookup') {
				// process checked/unchecked functionality
				if (!isExtensionChecked) {
					return <TextInput
						inputId={field.FieldName}
						labelDescription=''
						inputSizes={['col-12']}
						isDisabled={true}
						isMandatory={false}
						value=''
						isValid={true}
						validationMessage=''
						handleOnChange={() => false}
					/>;
				}
				else {
					return <UDLSelect
						udlListName={field.FieldListCode}
						selectId={field.FieldName}
						selectSizes={['col-12']}
						defaultPleaseSelect={true}
						defaultValue={isNull(field.FieldValue) || isUndefined(field.FieldValue) ? '' : field.FieldValue}
						handleOnChange={(event) => {
							this.handleUpdateExtensions(extensionIndex, fieldIndex, event.target.value);
						}}
						labelDescription=''
						isDisabled={!isExtensionChecked || this.props.extensionsConfig.disableExtensionFields.includes(field.FieldName) || this.props.isLoading}
						isMandatory={field.FieldRequired}
						validationMessage=''
						isValid={true}
						orderListBy='value'
					/>
				}
			}

			// validate if this is a text field to display
			if (field.FieldIsText) {
				// process checked/unchecked functionality
				if (!isExtensionChecked) {
					return <TextInput
						inputId={field.FieldName}
						labelDescription=''
						inputSizes={['col-12']}
						isDisabled={true}
						isMandatory={false}
						value=''
						isValid={true}
						validationMessage=''
						handleOnChange={() => false}
					/>;
				}
				else
					return <TextInput
						inputId={field.FieldName}
						labelDescription=''
						inputSizes={['col-12']}
						isDisabled={!isExtensionChecked || this.props.extensionsConfig.disableExtensionFields.includes(field.FieldName) || this.props.isLoading}
						isMandatory={field.FieldRequired}
						value={field.FieldValue}
						isValid={true}
						validationMessage=''
						handleOnChange={(event) => {
							this.handleUpdateExtensions(extensionIndex, fieldIndex, event.target.value);
						}}
					/>;
			}
		}
	}

	// render the extensions
	render() {
		return (
			<div className="main-content">
				<section className="section">
					<div className="row">
						<Card
							cardSizes={['col-12']}
							cardColor='card-primary'
							cardId='extensionsCard'
							cardShowHide={true}
							cardHeaderText={isEmpty(this.props.title) ? 'Extensions' : this.props.title}
							showCardFooter={this.state.extensionValidationMessages.length === 0 ? false : true}
							cardFooterTextArray={this.state.extensionValidationMessages}
							isLoading={isEmpty(this.props.extensions)}
							hasRateButton={this.props.hasRateButton}
							handleOnRateClick={() => {
								this.processRatedUpdateLogic(this.props.extensions)
							}}
							animateCard={true}>
							<div className="form-group">
								<form id="extensionsControlForm">
									<table className="table table-striped child-table table-responsive-sm table-responsive-md">
										<tbody>
											{
												
												!isEmpty(this.props.extensions) ?
													<React.Fragment>
														<tr>
															<th></th>
															<th>DESCRIPTION</th>
															{this.props.extensions.ExtensionHeaders.map((header, index) => {
																if (!('renameColumnLabels' in this.props.extensionsConfig)) return <th key={index}>{header}</th>;

																if (this.props.extensionsConfig.renameColumnLabels.length <= 0) return <th key={index}>{header}</th>;

																const name = this.props.extensionsConfig.renameColumnLabels.find((label) => label.old === header);

																if (typeof name === 'undefined' | name === '') return <th key={index}>{header}</th>;

																return <th key={index}>{name.new}</th>;
															})}
														</tr>
														{this.props.extensions.Extensions.map((extension, extensionIndex) => {
															// initialise variables
															const extensionsToHide = get(this.props.extensionsConfig, 'extensionsToHide', []);
															let hideExtension = false;

															// check if extensions should be hidden
															if (extensionsToHide.length > 0) {
																// initialise variables
																const checkboxIdArray = get(extension, 'CheckboxId', '').split('_');
																const extensionTypeId = checkboxIdArray[checkboxIdArray.length - 1];

																if (extensionsToHide.includes(extensionTypeId)) {
																	hideExtension = true;
																}
															}

															if (!hideExtension) {
																return (
																	<tr key={`${extension.CheckboxId}_${extensionIndex}`}>
																		<td className="center-align">
																			<Checkbox
																				checkboxId={extension.CheckboxId}
																				labelDescription=''
																				checkboxSizes={['col-12']}
																				handleOnChange={(event) => {
																					this.handleUpdateExtensions(extensionIndex, null, event.target.checked);
																				}}
																				checked={extension.CheckboxChecked}
																				isDisabled={extension.CheckboxRequired || this.props.isLoading}
																			/>
																		</td>
																		<td className="center-align">
																			<label>{extension.CheckboxLabel}</label>
																		</td>
																		{extension.Fields.map((field, fieldIndex) => {
																			return (
																				field.FieldDescription === null ?
																					(<td key={fieldIndex} className='form-group'></td>) :
																					(<td key={`${field.FieldName}_${fieldIndex}`} className='form-group'>
																						{this.deriveExtensionField(field, extension.CheckboxChecked, extensionIndex, fieldIndex)}
																					</td>)
																			)
																		})}
																	</tr>
																)
															}
														})}
													</React.Fragment>
													:
													<React.Fragment></React.Fragment>
											}
										</tbody>
									</table>
								</form>
							</div>
						</Card>
					</div>
				</section>
			</div>
		)
	}
}

// prop types for component
ExtensionsStandardControl.propTypes = {
	addressCnt: PropTypes.string.isRequired,
	extensions: PropTypes.object.isRequired,
	extensionsConfig: PropTypes.object.isRequired,
	extensionValidationRules: PropTypes.func.isRequired,
	getExtensions: PropTypes.func.isRequired,
	handleExtensionTotalUpdate: PropTypes.func.isRequired,
	handleExtensionsValidationUpdate: PropTypes.func.isRequired,
	hasRateButton: PropTypes.bool.isRequired,
	isLoading: PropTypes.bool.isRequired,
	riskState: PropTypes.object,
	title: PropTypes.string,
	updateExtensions: PropTypes.func.isRequired,
	updateRiskExtensions: PropTypes.func.isRequired,
	vehicleTypeId: PropTypes.string,
	disablePremiumField: PropTypes.bool,
	isItemImplementation: PropTypes.bool
};

// export the control
export default React.memo(ExtensionsStandardControl);