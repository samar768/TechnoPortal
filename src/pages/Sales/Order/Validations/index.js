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
	const sordInvalidSection=[];

	// update the section validation status
	const isItemsValid = false; ;
	const IsSORDHeaderSectionValid = OrderHeaderValidObject.isValid ;

	if (!IsSORDHeaderSectionValid){
		sordInvalidSection.push("HeaderDetails");
	}

	// return validation object
	return {
		SORDHeaderValid: IsSORDHeaderSectionValid,
		SORDItemsValid: isItemsValid,
		validationObject: OrderHeaderValidObject,
		sordInvalidSection:sordInvalidSection
	}
}