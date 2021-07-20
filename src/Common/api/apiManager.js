/* eslint no-undef: 0 */

// import statements
import axios from 'axios';
import cogoToast from 'cogo-toast';
import {
	GET_REQUEST,
	POST_REQUEST,
	HEADERS,
	HEADERS_JSON
} from '../constants';

// issues get request to handler and returns result
export const getResultFromServer = (handlerUrl, handlerParams,requestName) => {
	try {
		// issue get request to handler
		return new Promise((resolve, reject) => {
			return axios({
				url: handlerUrl,
				method: GET_REQUEST,
				params: handlerParams,
				headers: HEADERS
			})
				.then((result) => {
					resolve(result.data);
				})
				.catch((error) => {
					reject(error);
				});
		});
	}
	catch (err) {
		// configure toast options
		const toastOptions = {
			hideAfter: 5,
			position: 'top-right',
			heading: 'Error in getResultFromServer'
		};

		// display error message
		cogoToast.error(`There was an error issuing a get request: (${err.message})`, toastOptions);
	}
};

// issues post request to handler
export const postDataToServer = (handlerUrl, handlerParams) => {
	try {
		// issue get request to handler
		return new Promise((resolve, reject) => {
			return axios({
				url: handlerUrl,
				method: POST_REQUEST,
				data: handlerParams,
				headers: HEADERS
			})
				.then((result) => {
					resolve(result.data);
				})
				.catch((error) => {
					reject(error);
				});
		});
	}
	catch (err) {
		// configure toast options
		const toastOptions = {
			hideAfter: 5,
			position: 'top-right',
			heading: 'Error in postDataToServer'
		};

		// display error message
		cogoToast.error(`There was an error issuing a post request: (${err.message})`, toastOptions);
	}
};

// issues get request to handler and returns result
export const getResultFromRestAPI= (handlerUrl, handlerParams,requestName) => {
	try {
		// issue get request to handler
		return new Promise((resolve, reject) => {
			return axios({
				url: handlerUrl,
				method: GET_REQUEST,
				params: handlerParams,
				headers: HEADERS_JSON
			})
				.then((result) => {
					resolve(result.data);
				})
				.catch((error) => {
					reject(error);
				});
		});
	}
	catch (err) {
		// configure toast options
		const toastOptions = {
			hideAfter: 5,
			position: 'top-right',
			heading: 'Error in getResultFromServer'
		};

		// display error message
		cogoToast.error(`There was an error issuing a get request: (${err.message})`, toastOptions);
	}
};