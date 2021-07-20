// import statments
import React from 'react';
import PropTypes from 'prop-types';
import {IS_VIEW_MODE} from '../../constants';
import {ComponentLoader} from './index';

// select control
const Select = (props) => {

	// renders the select control
	const renderSelect = (selectOptions, defaultPleaseSelect) => {
		// display default if no list has been loaded yet
		if (selectOptions.length === 0)
			return <option key="0" value="">Awaiting options to load...</option>
		else {
			// define option list to return
			let selectOptionList = [];

			// verify if please select should be defaulted
			if (defaultPleaseSelect)
				selectOptionList.push(<option key='-1' value=''>Please select a value...</option>)

			// map through each udl item
			selectOptions.map((option) => {
				selectOptionList.push(<option key={option.Key} value={option.Key}>{option.Value}</option>)
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
			{props.isLoading ?
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
							onChange={props.handleOnChange}
							disabled={IS_VIEW_MODE || props.isDisabled}
							value={props.defaultValue}
						>
							{renderSelect(props.selectOptions, props.defaultPleaseSelect, props.defaultValue)}
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
Select.propTypes = {
	selectId: PropTypes.string.isRequired,
	selectSizes: PropTypes.array.isRequired,
	selectOptions: PropTypes.array.isRequired,
	defaultPleaseSelect: PropTypes.bool.isRequired,
	defaultValue: PropTypes.string.isRequired,
	handleOnChange: PropTypes.func.isRequired,
	labelDescription: PropTypes.string.isRequired,
	isDisabled: PropTypes.bool.isRequired,
	isMandatory: PropTypes.bool.isRequired,
	isValid: PropTypes.bool.isRequired,
	validationMessage: PropTypes.string.isRequired,
	isLoading: PropTypes.bool
};

// export the select control
export default React.memo(Select);