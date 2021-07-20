import {
  PROCESS_LOGIC
} from './logicTypes';

import { processLogic } from '../../api/index';

export const getFilteredList = (process_func, additional) => async (dispatch) => {
  try {
    const { data } = await processLogic({ name: process_func, additional: additional })

    dispatch({ type: PROCESS_LOGIC, payload: { data: data }});
  } catch (error) {
    console.log(error.message)
  }
}
