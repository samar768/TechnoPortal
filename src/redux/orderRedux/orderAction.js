import { UPDATE_ORDER, UPDATE_ITEM_ORDER, REMOVE_ITEM_ORDER } from './orderTypes';

export const updateOrder = (orderData) => async (dispatch) => {
  try {
    dispatch({ 
      type: UPDATE_ORDER, 
      payload: {
        data: orderData
      }});
  } catch (error) {
    console.log(error.message);
  }
};

export const updateItemOrder = (itemData, row) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_ITEM_ORDER,
      payload: {
        data:itemData,
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
