import {
  UPDATE_ORDER,
  UPDATE_ITEM_ORDER,
  REMOVE_ITEM_ORDER
} from './orderActionTypes';
// import validation methods
import {
  processSordValidation
} from '../../pages/Sales/Order/Validations';

import {
  initialiseSordObject,
} from '../../Common/Redux/CommonRedux';
import {postDataToServer} from '../../Common/api/apiManager';
import cogoToast from 'cogo-toast';

const ORDER_POST_API='https://paper-de9be-default-rtdb.firebaseio.com/sord.json';

/// This is an Action creater where a function  take the action creater and return again a function.
/// In this case this function called and again dispatch action excuted internally by the redux
/// It could be called any other component using simply redux dispatch calling.

export const updateOrder = (orderData, ) => async (dispatch, validationObject) => {
  try {
    dispatch({
      type: UPDATE_ORDER,
      payload: {
        data: orderData,
        validation: validationObject
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateItemOrder = (itemData, row) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_ITEM_ORDER,
      payload: {
        data: itemData,
        row: row,
      }
    })
  } catch (error) {
    console.log(error.message);
  }
};

export const removeItemOrder = (row) => async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_ITEM_ORDER,
      payload: {
        row: row,
      }
    })
  } catch (error) {
    console.log(error.message);
  }
};

export const FetchOrder = (orderData) => {
  return (dispatch) => {
    try {
      const fetchdata = async (orderData) => {
        const response = await fetch(
          'https://paper12-de9be-default-rtdb.firebaseio.com/order.json'
        );
        if (response.ok) {
          // throw new error ('could not fetch order data !');
          const data = response.json();
          dispatch({
            type: UPDATE_ITEM_ORDER,
            payload: {
              data: data,
            }
          })
        }
        // return data;
      };

    } catch {
      console.log('failed to fetch the order data');
    }
  };
};

export const initialiseSord = (SordObject) => {
  return (dispatch) => {
    // dispatch initial state
    initialiseSordObject(dispatch, '',
      UPDATE_ORDER,
      SordObject,
      processSordValidation,
      ['SORDHEADERValid'],
      '');
  };
};

export const updateHeaderOrderData = (SordObject) => {
  return (dispatch) => {
    // dispatch updated state
    initialiseSordObject(dispatch, '',
      UPDATE_ORDER,
      SordObject,
      processSordValidation,
      ['SORDHEADERValid'],
      '');
  };
};

// An Dispatch action to post data into DB
// dispatch name:updateHeaderOrderData
export const PersistOrderData = (SordObject) => {
  return (dispatch) => {
   const Requestdata=SordObject;
   //Clear the validation object from the request
   delete Requestdata.validation;

  const handlerParams=JSON.stringify(Requestdata)
   // retrieve initial dataset from the server
	postDataToServer(
                  ORDER_POST_API,
                  handlerParams,Requestdata)
  .then((riskObjectResult) => {
    // validate return result
    if (riskObjectResult !== null) {
      // process validation and calculations
      // initialiseUpdateRiskObject(
      //   dispatch,
      //   '',
      //   successActionType,
      //   get(riskObjectResult.DATA_SET.RISK_OBJECTS[policyBinderObjectName], xmlParentName, {}),
      //   validationFunction,
      //   validationPropertyArray,
      //   calculationFunction
      // );
    }
  })
  .then(() => {
    // dispatch application loading state
    // dispatch(updateLoadingAppGeneral(false));
  })
  .catch((error) => {
    const toastOptions = {
			hideAfter: 5,
			position: 'top-right',
			heading: 'Error in postDataToServer'
		};
    // display error in a toast message
    cogoToast.error(`There was an error issuing a post request: (${error.message})`,toastOptions);
  });
  };
};