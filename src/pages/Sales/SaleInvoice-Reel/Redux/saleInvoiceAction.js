import {
  UPDATE_ORDER,
  UPDATE_ITEM_ORDER,
  REMOVE_ITEM_ORDER,
  INITIALISE_ITEM_ORDER_WITH_NEWROW,
} from "./saleInvoiceActionTypes";
// import validation methods
// import { processSordValidation } from "../Validations";

import { initialiseSordObject } from "../../../../Common/Redux/CommonRedux";
import {} from "../Redux/saleInvoiceReducer";
import {
  postDataToServer,
  getDataFromServer,
} from "../../../../Common/api/apiManager";
import cogoToast from "cogo-toast";
import { toastOptionsError } from "../../../../Common/Error/ErrorConstants.js";

const ORDER_POST_API =
  "https://paper-de9be-default-rtdb.firebaseio.com/sord.json";
const ORDER_GET_API =
  "https://paper-de9be-default-rtdb.firebaseio.com/sord.json";

// process redux action started method
export const processReduxActionNewItemAdd = (
  actionType,
  riskObject,
  validationObject
) => ({
  type: actionType,
  payload: {
    data: riskObject,
    validation: validationObject,
  },
});

export const addNewItem = (itemData, row) => async (dispatch) => {
  try {
    dispatch({
      type: INITIALISE_ITEM_ORDER_WITH_NEWROW,
      payload: {
        data: itemData,
        row: row,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const updateItem = (updatedRow, rowIndex) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_ITEM_ORDER,
      payload: {
        updatedRow: updatedRow,
        fieldIndex: rowIndex,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const removeItem = (row) => async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_ITEM_ORDER,
      payload: {
        row: row,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};
