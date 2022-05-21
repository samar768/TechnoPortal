// import statements
import validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';

// validates the state given a set of validations and returns a validation object
export const validateExtensions = (formControlArray, validations) => {
	// start out assuming valid
	let validation = isExtensionsValid(validations);

	// for each validation rule
	validations.forEach((rule) => {
		// if the field hasn't already been marked invalid by an earlier rule
		if (!validation[rule.field].isInvalid) {
			// determine the field value, the method to invoke and optional args from
			// the rule definition
			let field_value = '';
			let isFieldValidationRequired = false;
			if (!rule.isGeneralFormRule) {
				// validate each form control
				formControlArray.map((formControl) => {
					if (formControl.name === rule.field) {
						field_value = formControl.value === '' ? '' : formControl.value;
						isFieldValidationRequired = true;
					}
				});
			}

			if (isFieldValidationRequired) {
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
				if (validation_method(field_value, ...args, formControlArray) !== rule.validWhen) {
					validation[rule.field] = {
						isInvalid: true,
						message: rule.message
					};
					validation.isValid = false;
				}
			}
		}
	});

	return validation;
}

// initialises each validation rule
const isExtensionsValid = (validations) => {
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

// processes a list of validation rules against a set of extensions
export const getExtensionValidationMessages = (extensions, validationRules, riskState = {}) => {
	// initialise extension validation rules
	let validationMessages = [];

	// validate the extensions against the relevant rules
	if (!isEmpty(extensions)) {
		// map through the set of extensions
		extensions.Extensions.map((extension) => {
			extension.Fields.map((field) => {
				// get field
				const data = {
					name: field.FieldName,
					value: isEmpty(field.FieldValue) ? '' : field.FieldValue,
					extension,
					riskState
				};

				// ensure the rules aren't empty and the extensions has been selected
				if (!isEmpty(validationRules) && extension.CheckboxChecked) {
					// validate extensions
					const extensionsValidationObject = validateExtensions([data], validationRules);

					// if validation fails, add a validation message
					const message = get(extensionsValidationObject[field.FieldName], 'message', '');

					// validate message
					if (!isEmpty(message))
						validationMessages.push(message);
				}
			});
		});
	}

	// return validation messages
	return validationMessages;
}