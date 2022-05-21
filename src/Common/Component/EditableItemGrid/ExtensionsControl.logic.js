// import statements
import clone from 'lodash/clone';

// validates the state given a set of validations and returns a validation object
export const processRules = (fieldId, extensionState, reduxState, rules) => {
	// filter out rules for the relevant field
	const filteredRules = rules.filter((rule) => {
		return rule.field === fieldId;
	});

	// clone the current extensions state
	let result = clone(extensionState, true);

	// for each rule
	filteredRules.map((rule) => {
		// get any arguments
		const args = rule.args || [];

		// get the logic rule to execute
		const logic_method = rule.method;

		// execute method
		result = logic_method(extensionState, reduxState, ...args);
	});

	// return udpated state result
	return result;
}