/* eslint-disable import/no-anonymous-default-export */
import { LOGIN, LOGOUT  } from './authTypes';


export default (
  state = {
    isAuthUser: !!localStorage.getItem("user"),
    user: JSON.parse(localStorage.getItem("user")) || {},
    isLoading: false,
    error: null
  }, action) => {
  switch (action.type) {
    case LOGIN: {
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state, isAuthUser: true, user: action.payload };
    }
      case LOGOUT:
      {
        localStorage.removeItem("user");
        return { ...state, isAuthUser: false, user: {} };
      }
    default:
      return state;
  }
}