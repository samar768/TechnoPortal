// import statements
import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
	IS_VIEW_MODE
} from '../../constants';
import {
	ComponentLoader
} from './index';
import parseISO from 'date-fns/parseISO';

// custom calendar control
const CalendarInput = (props) => {
	let style = {};

	// define a custom style for the calendar control, if validation fails
	if (props.validationMessage) {
		style = {display: 'block'}
	}

	return (
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
						<DatePicker
							className={`form-control ${props.isValid === false ? 'is-invalid' : ''} ${props.isMandatory ? 'is-required-field' : ''}`}
							dateFormat='dd/MM/yyyy'
							disabled={IS_VIEW_MODE || props.isDisabled}
							minDate={parseISO(props.minDate)}
							maxDate={parseISO(props.maxDate)}
							onChange={props.handleOnChange}
							selected={props.value === '' ? null : parseISO(props.value)}
						/>
						<div className='invalid-feedback' style={style}>
							{props.validationMessage || ''}
						</div>
					</div>
				)
			}
		</div>
	)
}

// prop types for calendar control
CalendarInput.propTypes = {
	// handleOnChange: PropTypes.func.isRequired,
	inputId: PropTypes.string.isRequired,
	inputSizes: PropTypes.array.isRequired,
	isDisabled: PropTypes.bool.isRequired,
	isLoading: PropTypes.bool,
	isMandatory: PropTypes.bool.isRequired,
	isValid: PropTypes.bool.isRequired,
	labelDescription: PropTypes.string.isRequired,
	minDate: PropTypes.string,
	maxDate: PropTypes.string,
	validationMessage: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};

// export calendar control
export default React.memo(CalendarInput);