// import statements
import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

// validates the state given a set of validations and returns a validation object
export const validateForm = (state, validations) => {
	// start out assuming valid
	let validation = isFormValid(validations);

	// for each validation rule
	validations.map((rule) => {
		// if the field hasn't already been marked invalid by an earlier rule
		if (!validation[rule.field].isInvalid) {
			// determine the field value, the method to invoke and optional args from
			// the rule definition
			let field_value = '';

			if (!rule.isGeneralFormRule)
				field_value = state[rule.field] === '' || isEmpty(state[rule.field], true) ? '' : state[rule.field].toString();

			const args = rule.args || [];
			const validation_method =
				typeof rule.method === 'string' ?
					validator[rule.method] :
					rule.method;

			// call the validation_method with the current field value as the first
			// argument, any additional arguments, and the whole state as a final
			// argument.  If the result doesn't match the rule.validWhen property,
			// then modify the validation object for the field and set the isValid
			// field to false            
			if (validation_method(field_value, ...args, state) !== rule.validWhen) {
				validation[rule.field] = {
					isInvalid: true,
					message: rule.message
				};
				validation.isValid = false;
			}
		}
	});

	return validation;
}

// initialises each validation rule
const isFormValid = (validations) => {
	const validation = {};

	validations.map(
		(rule) => (validation[rule.field] = {
			isInvalid: false,
			message: ''
		})
	);

	return {
		isValid: true,
		...validation
	};
}