import {
  FETCH_FILTERED_LIST,
  FETCH_LIST
} from './listTypes';

import { fetchFilteredList, fetchList } from '../../api/index';

export const getList = (list_type) => async (dispatch) => {
  try {
    const { data } = await fetchList(list_type);

    dispatch({ type: FETCH_LIST, payload: { data: data, list: list_type }});
  } catch (error) {
    console.log(error.message);
  }
}

export const getFilteredList = (list_type, filter) => async (dispatch) => {
  try {
    const { data } = await fetchFilteredList(list_type, filter);

    dispatch({ type: FETCH_FILTERED_LIST, payload: { data: data, list: list_type, filter: filter }});
  } catch (error) {
    console.log(error.message)
  }
}
