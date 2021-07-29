/* eslint-disable no-redeclare */
/* eslint-disable import/no-anonymous-default-export */
import _ from 'lodash';
import { UPDATE_ORDER, UPDATE_ITEM_ORDER, REMOVE_ITEM_ORDER } from './orderTypes';
import { ITEM} from '../../Common/OrderContstant/order';


// declare initial state
const INITIAL_STATE = {
  'items': {},
    TYPE:'SORD',
    PARTY:'SAMAR'
  
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_ORDER:
      return { 
        ...state, ...action.payload.data 
      };
    case UPDATE_ITEM_ORDER:
      var row = action.payload.row;
      var items = ('items' in state) ? state['items'] : {};
      var update = {...items, [row]: action.payload.data};

      return {
        ...state, 'items': update
      }
    case REMOVE_ITEM_ORDER:
      var row = action.payload.row;
      var items = ('items' in state) ? state['items'] : {};
      var update = items;

      if (_.has(items, row)) {
        delete items[row];

        update = Object.keys(items).reduce(function(obj, key, index) {
          var item = items[key];

          item.ID = index + 1;
          item[ITEM.V_SNO] = index + 1;
          obj[index + 1] = item;
          
          return obj;
        }, {});
      } 

      return {
        ...state, 'items': update
      }
    default:
      return state;
  }
}
