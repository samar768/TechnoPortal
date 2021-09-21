// import statements
import React from 'react';
import PropTypes from 'prop-types';
import find from 'lodash/find';
import isUndefined from 'lodash/isUndefined';
import isNull from 'lodash/isNull';
import {
	IS_VIEW_MODE
} from '../../../constants';
import {
	Typeahead
} from 'react-bootstrap-typeahead';
import getListValues from './GetSearchableHelpHooks';
import {
	ComponentLoader
} from '../../General/index';

// renders a vehicle lookup control
const SearchableHelpControl = (props) => {
	// retrieve a list of vehicle makes
	const controlListValues = getListValues();

	// verify if a make entitled UNKNOWN should be added
	if (controlListValues.length > 0 ) {
		controlListValues.push({code: 'AddNew', description: '--Add New item--'});
	}

	// render the makes autocomplete control
	return (
		<div className={'form-group ' + props.inputSizes.join(' ')}>
			<label htmlFor={props.controlId}>{props.labelDescription}</label>
			{props.isLoading || controlListValues.length === 0 ?
				(
					<ComponentLoader
						componentSizes={props.inputSizes}
					/>
				) :
				(
					<div>
						<Typeahead
							id={props.controlId}
							isValid={props.isMandatory}
							selected={defaultMakeCode}
							labelKey="name"
							disabled={IS_VIEW_MODE}
							multiple={false}
							options={controlListValues.length > 0 
								? 
								controlListValues.map((listitem) => ({id: listitem.code, name: listitem.Description.toString().toUpperCase()})) 
								: []
							}
							placeholder="Please select an option..."
							onChange={
								(makeCodeItemArr) => {
									makeCodeItemArr.length === 1 ?
										props.handleOnChange(props.fieldToChange, makeCodeItemArr[0].id.toString(), makeCodeItemArr[0].name.toString()) :
										props.handleOnChange(props.fieldToChange, '', '')
								}
							}
							isInvalid={!props.isValid}
						/>
						<div className="invalid-typeahead-feedback">
							{props.validationMessage || ''}
						</div>
					</div>
				)
			}
		</div>
	);
}

{/* Component PropType Validation */}
SearchableHelpControl.propTypes = {
	controlId: PropTypes.string.isRequired,
	inputSizes: PropTypes.array.isRequired,
	labelDescription: PropTypes.string.isRequired,
	makeCode: PropTypes.string.isRequired,
	handleOnChange: PropTypes.func.isRequired,
	fieldToChange: PropTypes.string.isRequired,
	addUnknownMake: PropTypes.bool.isRequired,
	isMandatory: PropTypes.bool.isRequired,
	isLoading: PropTypes.bool.isRequired,
	validationMessage: PropTypes.string.isRequired,
	isValid: PropTypes.bool.isRequired
}

// export control
export default React.memo(SearchableHelpControl);
