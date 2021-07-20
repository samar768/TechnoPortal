// import statements
import React from 'react';
import PropTypes from 'prop-types';
import has from 'lodash/has';
import isEmpty from 'lodash/isEmpty';
import {IS_VIEW_MODE} from '../../constants';
import {ComponentLoader} from './index';

// custom numeric formatter
const TextArea = (props) => {

	const textAreaValue = (value) => {
		if (hasValue(value)) {
			return value.replace(/\\\\n/g, '\n').replace(/\\n/g, '\n').replace(/\\\\r/g, '\r').replace(/\\r/g, '\r');
		}
		else {
			return '';
		}
	}

	const hasValue = (item) => {
		if (typeof item === 'undefined' || item === null || item === '') {
			return false;
		}
		else {
			return true;
		}
	}

	return (
		<div className={props.inputSizes.join(' ')}>
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
						<textarea
							name={props.inputId}
							className={`form-control ${props.isValid === false ? 'is-invalid' : ''} ${props.isMandatory ? 'is-required-field' : ''}`}
							rows={props.rows || 5}
							style={{resize: 'none'}}
							id={props.inputId}
							disabled={IS_VIEW_MODE || props.isDisabled}
							value={textAreaValue(props.value)}
							onChange={props.handleOnChange}
							onBlur={props.handleOnBlur}
							key={props.inputId}
							maxLength={props.maxChars}
						/>
						<label className="character-count">Characters Left: {(has(props, 'maxChars') ? props.maxChars : 0) - ((has(props, 'value') && !isEmpty(props.value)) ? (props.value).toString().length : 0)}</label>
						<div className="invalid-feedback">
							{props.validationMessage || ''}
						</div>
					</div>
				)
			}
		</div>
	)
}

// prop types for card
TextArea.propTypes = {
	handleOnBlur: PropTypes.func,
	handleOnChange: PropTypes.func,
	inputId: PropTypes.string.isRequired,
	inputSizes: PropTypes.array.isRequired,
	isDisabled: PropTypes.bool.isRequired,
	isLoading: PropTypes.bool,
	isMandatory: PropTypes.bool.isRequired,
	isValid: PropTypes.bool.isRequired,
	labelDescription: PropTypes.string.isRequired,
	maxChars: PropTypes.number.isRequired,
	rows: PropTypes.number,
	validationMessage: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};

// export numeric control
export default React.memo(TextArea);
