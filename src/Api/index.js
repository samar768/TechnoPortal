import axios from 'axios';

const urlLists = 'http://localhost:5000/lists';
const urlLogin = 'http://localhost:5000/login';
const urlLogic = 'http://localhost:5000/logic';

export const fetchList = (list_type) => axios.get(`${urlLists}/list/${list_type}`);
export const fetchFilteredList = (list_type, filter) => axios.get(`${urlLists}/list/${list_type}/${filter}`);

export const processLogic = (params) => axios.post(urlLogic, params);

export const validateLogin = (credentials) => axios.post(urlLogin, credentials);