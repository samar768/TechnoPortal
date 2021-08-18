// import statments
import React,{useState} from "react";
import PropTypes from 'prop-types';
import getUDLList from '../../../Hooks/Common/getUDLList';
import {
	IS_VIEW_MODE
} from '../../constants';
import {
	ComponentLoader,
	Numeral
} from './index';


// select control
const UDLSelect = (props) => {
	// retrieve and sort the udl the udl
	let udlList = getUDLList(props.udlListName, props.udlListType);

	// udlList = udlList.sort((a, b) => a.Description.localeCompare(b.Description));

	// renders the select control
	const renderSelect = (udlList, defaultPleaseSelect, defaultValue, exclusionList) => {
		// display default if no list has been loaded yet
		if (udlList.jsonData.length === 0)
			return <option key="0" value="">Loading...</option>
		else {
			// define option list to return
			let selectOptionList = [];
			let exclusionListEntries = [];

			if (exclusionList) {
				exclusionListEntries = exclusionList;
			}

			let listType = !(props.udlListType) ? 'pmlookup' : props.udlListType === 'userdefined' ? 'userdefined' : 'pmlookup';

			// verify if please select should be defaulted
			if (defaultPleaseSelect)
				selectOptionList.push(<option key='-1' value=''>Please select a value...</option>)

			// sort the list, if applicable
			// if (typeof props.orderListBy !== 'undefined' & props.orderListBy !== '') {
			// 	if (props.orderListBy === 'Code') {
			// 		udlList.sort((a, b) => (parseInt(a.Description) > parseInt(b.Description)) ? 1 : ((parseInt(b.Description) > parseInt(a.Description) ? -1 : 0)))
			// 	}
			// }

			// map through each udl item
			udlList.jsonData.map((udlItem) => {
				if (udlItem.code) {
					if (!exclusionListEntries.includes(udlItem.code.toString())) {
						// initialise variables
						let value = udlItem.description;

						// format description, if applicable
						if (props.formatValueAsCurrency) {
							value = Numeral(value.replace(/\D/g, '')).formatCurrency({thousandSeparated: true, mantissa: 0});
						}

						switch (listType) {
							case 'pmlookup': {
								selectOptionList.push(<option key={udlItem.code} value={udlItem.code}>{value}</option>)
								break;
							}
							case 'userdefined': {
								selectOptionList.push(<option key={udlItem.Key} value={udlItem.Key}>{value}</option>)
								break;
							}
							default:
								break;
						}
					}
				}
			});

			// return list
			return selectOptionList;
		}
	}
	// render the UDL
	return (

		<div className={'form-group ' + props.selectSizes.join(' ')}>
			{props.labelDescription === '' ?
				'' :
				<label htmlFor={props.selectId}>{props.labelDescription}</label>
			}
			{props.isLoading || udlList.length === 0 ?
				(
					<ComponentLoader
						componentSizes={props.selectSizes}
					/>
				) :
				(
					<div>
						<select
							id={props.selectId}
							name={props.selectId}
							className={`form-control ${props.isValid === false ? 'is-invalid' : ''} ${props.isMandatory ? 'is-required-field' : ''}`}
							onChange={props.isViewOnly ? false : props.handleOnChange}
							disabled={IS_VIEW_MODE || props.isDisabled || props.isViewOnly}
						    defaultValue={`SORD`}
						>
							{renderSelect(udlList, props.defaultPleaseSelect, props.defaultValue, props.exclusionList)}
						</select>
						<div className="invalid-feedback">
							{props.validationMessage || ''}
						</div>
					</div>
				)
			}
		</div>
	)
}

// prop types for select control
UDLSelect.propTypes = {
	udlListName: PropTypes.string.isRequired,
	selectId: PropTypes.string.isRequired,
	selectSizes: PropTypes.array.isRequired,
	defaultPleaseSelect: PropTypes.bool.isRequired,
	defaultValue: PropTypes.string.isRequired,
	handleOnChange: PropTypes.func.isRequired,
	labelDescription: PropTypes.string.isRequired,
	isDisabled: PropTypes.bool.isRequired,
	isMandatory: PropTypes.bool.isRequired,
	isValid: PropTypes.bool.isRequired,
	validationMessage: PropTypes.string.isRequired,
	exclusionList: PropTypes.array,
	udlListType: PropTypes.string,
	orderListBy: PropTypes.string,
	isLoading: PropTypes.bool,
	isViewOnly: PropTypes.bool,
	formatValueAsCurrency: PropTypes.bool
};

// export the select control
export default React.memo(UDLSelect);