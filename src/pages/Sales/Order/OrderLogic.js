import {
    set
  } from 'lodash'
  
  import {
    TYPE
    , ORDER_NO
    , V_NO
    , PARTY
    , CONTRACTUAL_ORDER_REF
  } from '../../../Common/OrderContstant/order.js';
  
  import {
    processLogic
  } from '../../../api/index';
  
  export const stateChange = async (key, value, data, list_data) => 
    new Promise(async resolve => {
      switch (key) {
        case TYPE: {
          let response = set(data, V_NO, '' );
  
          let StrDocID = await processLogic({ name: 'get_doc_id', additional: {} });
          response = set(response, ORDER_NO, StrDocID.data.Id );
    
          return resolve(response);
        }
        // case PARTY: {
        //   // let response = set(data, CONTRACTUAL_ORDER_REF, '');
        //   // response = set(response, '', '');
  
        //   return resolve(response)
        // }
        default: {
          return resolve(data);
        }
      }
    });
  