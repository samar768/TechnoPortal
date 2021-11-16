// import statements
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import set from 'lodash/set';

// process redux action started method
export const processReduxActionStarted = (actionType) => ({
	type: actionType
});

// process redux action started method
export const processReduxActionSuccess = (actionType, riskObject, validationObject) => ({
	type: actionType,
	payload: {
		data: riskObject,
		validation: validationObject
	}
});

// generic function to initialise or update the risk object
export const initialiseSordObject = (dispatch, 
                                    startedActionType,
                                    successActionType, 
                                    riskObject, 
                                    validationFunction, 
                                    validationPropertyArray, 
                                    calculationFunction
                                    ) => {
	// initialise variables
	let validationObject = {};
	let isRiskObjectValid = false;

	// validate started action type
	if (startedActionType !== '') {
		dispatch(processReduxActionStarted(startedActionType));
	}

	// if (startedActionType !== '') {
	// 	dispatch(getOrderData(startedActionType));
	// }

		if (startedActionType !== '') {
		dispatch(startedActionType(riskObject));
	}
	
	// process adjustment calculations
	if (typeof calculationFunction === 'function')
		riskObject = calculationFunction(riskObject);

	// execute validation (if applicable)
	if (typeof validationFunction === 'function') {
		validationObject = validationFunction(riskObject);
	}

	// update validation state
	if (!isEmpty(validationObject) && !isEmpty(validationPropertyArray)) {
		isRiskObjectValid = validationPropertyArray.every((vp) => {
			return get(validationObject, vp, false);
		});
	}

	// update section valid state
	if (!isEmpty(validationObject) && !isEmpty(validationPropertyArray)) {
		riskObject = set(riskObject, 'IS_SECTION_VALID', isRiskObjectValid ? '1' : '0');
	}

	// dispatch initial state
    dispatch(processReduxActionSuccess(successActionType, riskObject, validationObject));
    
   
}







