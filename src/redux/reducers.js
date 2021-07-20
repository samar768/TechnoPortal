import { combineReducers } from 'redux';
import authReducers from './authRedux/authReducer';
import orderReducers from './orderRedux/orderReducer';
import listReducers from './listRedux/listReducer';

const rootReducer = combineReducers({
	authData: authReducers,
	listData: listReducers,
	orderData: orderReducers
});

export default rootReducer;