// import statements
import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import {IS_VIEW_MODE} from '../../constants';
import {ComponentLoader} from './index';

// custom numeric formatter
const MaskFormatter = (props) => (
	<div className={'form-group ' + props.inputSizes.join(' ')}>
		{props.labelDescription === '' ?
			'' :
			<label htmlFor={props.inputId}>{props.labelDescription}</label>
		}
		{props.isLoading ?
			(
				<ComponentLoader
					componentSizes={props.inputSizes}
				/>
			) :
			(
				<div>
					<NumberFormat
						name={props.inputId}
						className={`form-control ${props.isValid === false ? 'is-invalid' : ''} ${props.isMandatory ? 'is-required-field' : ''}`}
						id={props.inputId}
						format={props.maskFormat}
						placeholder={props.placeHolder}
						mask={props.maskArray}
						defaultValue={props.defaultValue}
						disabled={IS_VIEW_MODE || props.isDisabled}
						value={props.value}
						onBlur={props.handleOnNumericChange}
					/>
					<div className="invalid-feedback">
						{props.validationMessage || ''}
					</div>
				</div>
			)
		}
	</div>
)

// prop types for card
MaskFormatter.propTypes = {
	inputId: PropTypes.string.isRequired,
	labelDescription: PropTypes.string.isRequired,
	inputSizes: PropTypes.array.isRequired,
	defaultValue: PropTypes.string.isRequired,
	handleOnNumericChange: PropTypes.func.isRequired,
	isDisabled: PropTypes.bool.isRequired,
	isMandatory: PropTypes.bool.isRequired,
	value: PropTypes.string.isRequired,
	isValid: PropTypes.bool.isRequired,
	validationMessage: PropTypes.string.isRequired,
	maskFormat: PropTypes.string.isRequired,
	maskArray: PropTypes.array,
	placeHolder: PropTypes.string.isRequired,
	isLoading: PropTypes.bool
};

// export numeric control
export default React.memo(MaskFormatter);