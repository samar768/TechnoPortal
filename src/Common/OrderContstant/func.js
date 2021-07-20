import _ from 'lodash';

export const buildOptionList = (list_type, listData) => {
  var response = [];
  
  if (!(_.has(listData, list_type))) return response;

  response = listData[list_type];

  return response;
}