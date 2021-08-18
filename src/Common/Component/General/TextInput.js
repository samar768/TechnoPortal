// import statements
import React from 'react';
import PropTypes from 'prop-types';
import {
	IS_VIEW_MODE
} from '../../constants';
import {
	ComponentLoader
} from './index';
import  '../../../assets/css/custom.css';
	
// custom numeric formatter
const TextInput = (props) => (

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
					<input
						type='text'
						name={props.inputId}
						className={`form-control input-sm ${props.isValid === false ? 'is-invalid' : ''} ${props.isMandatory ? 'is-required-field' : ''}`}
						id={props.inputId}
						disabled={IS_VIEW_MODE || props.isDisabled}
						value={props.value}
						// onChange={(event,data)=> {props.handleOnChange(event,data)}}
						onChange={props.handleOnChange}
						onBlur={props.handleOnBlur}
						key={props.inputId}
						maxLength={props.maxLength} 
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
TextInput.propTypes = {
	inputId: PropTypes.string.isRequired,
	labelDescription: PropTypes.string.isRequired,
	inputSizes: PropTypes.array.isRequired,
	isDisabled: PropTypes.bool.isRequired,
	isMandatory: PropTypes.bool.isRequired,
	value: PropTypes.string.isRequired,
	isValid: PropTypes.bool.isRequired,
	validationMessage: PropTypes.string.isRequired,
	handleOnChange: PropTypes.func,
	handleOnBlur: PropTypes.func,
	isLoading: PropTypes.bool
};

// export numeric control
export default React.memo(TextInput);