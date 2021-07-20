// import statements
import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import {
	IS_VIEW_MODE
} from '../../constants';
import {
	ComponentLoader
} from './index';

// custom numeric formatter
const NumericFormatter = (props) => (
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
						allowNegative={props.allowNegative}
						className={`form-control ${props.isValid === false ? 'is-invalid' : ''} ${props.isMandatory ? 'is-required-field' : ''}`}
						decimalScale={props.numDecimals}
						defaultValue={props.defaultValue}
						disabled={IS_VIEW_MODE || props.isDisabled}
						fixedDecimalScale={true}
						id={props.inputId}
						isAllowed={(values) => {
							const {formattedValue, floatValue} = values;

							if (props.maxValue) {
								return formattedValue == '' || floatValue <= parseFloat(props.maxValue);
							}
							else {
								return true;
							}
						}}
						name={props.inputId}
						onBlur={props.handleOnNumericChange}
						prefix={props.prefix}
						suffix={props.suffix}
						thousandSeparator={true}
						value={props.value}
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
NumericFormatter.propTypes = {
	allowNegative: PropTypes.bool.isRequired,
	defaultValue: PropTypes.string,
	handleOnNumericChange: PropTypes.func,
	inputId: PropTypes.string.isRequired,
	inputSizes: PropTypes.array.isRequired,
	isDisabled: PropTypes.bool.isRequired,
	isLoading: PropTypes.bool,
	isMandatory: PropTypes.bool.isRequired,
	isValid: PropTypes.bool.isRequired,
	labelDescription: PropTypes.string.isRequired,
	maxValue: PropTypes.number,
	numDecimals: PropTypes.number.isRequired,
	prefix: PropTypes.string.isRequired,
	suffix: PropTypes.string.isRequired,
	validationMessage: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};

// export numeric control
export default React.memo(NumericFormatter);