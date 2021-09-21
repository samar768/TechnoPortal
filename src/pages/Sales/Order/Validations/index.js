// import statements
import isEmpty from 'lodash/isEmpty';
import {
	validateForm
} from '../../../../Common/validation/formValidator';
import {
	OrderHeaderValidationRules
} from './OrderHeader.Validation';

// processes validation rules for the electronic equipment cover details section
export const isOrderHeaderValid = (OrderObject) => {
	if (!isEmpty(OrderObject)) {
		const validationRules = OrderHeaderValidationRules();
		return validateForm(OrderObject, validationRules);
	}
	else {
		return {};
	}
}

// processes validation for electronic equipment
export const processSordValidation = (riskDataSet) => {
	// execute validation for the cover details selection screen
	const OrderHeaderValidObject = isOrderHeaderValid(riskDataSet);

	// update the section validation status
	const isSectionValid = OrderHeaderValidObject.isValid ;

	// return validation object
	return {
		SORDValid: isSectionValid,
		validationObject: OrderHeaderValidObject,
	}
}