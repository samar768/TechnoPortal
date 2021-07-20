/* eslint-disable import/no-anonymous-default-export */
import {
  FETCH_FILTERED_LIST
  , FETCH_LIST
} from './listTypes';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_LIST: {
      return {
        ...state, [action.payload.list] : action.payload.data
      }
    }
    case FETCH_FILTERED_LIST: {
      var list = (action.payload.list in state) ? state[action.payload.list] : [];
      var update = {...list, [action.payload.filter.toUpperCase()]: action.payload.data};
      return {
        ...state, [action.payload.list]: update
      }
    }
    default:
      return state
  }
}
