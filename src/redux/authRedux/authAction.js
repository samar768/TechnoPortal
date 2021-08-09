import { LOGIN, LOGOUT } from './authTypes';

import { validateLogin } from '../../api';
import history from '../../pages/Authentication/history';

export const login = (credentials) => async (dispatch) => {
  var cred = JSON.stringify(credentials);
  var user = await validateLogin(cred);

  dispatch({
    type: LOGIN,
    payload: user.data
  });
  
  history.push('/');
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT
  });

   history.push('/login');
};