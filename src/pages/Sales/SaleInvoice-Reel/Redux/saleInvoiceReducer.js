/* eslint-disable no-redeclare */
/* eslint-disable import/no-anonymous-default-export */
import _ from "lodash";
import {
  UPDATE_ORDER,
  UPDATE_ITEM_ORDER,
  REMOVE_ITEM_ORDER,
  INITIALISE_ITEM_ORDER_WITH_NEWROW,
} from "./saleInvoiceActionTypes";
import { ITEM } from "../../../../Common/OrderContstant/order";
import { emptyRow } from "../Constants";

// declare initial state
const INITIAL_STATE = {
  items: [
    {
      V_SNO: "1",
      ItemCode: "",
      IName: "",
      Qty: 0,
      Rate: 0,
    },
  ],
  validation: {
    validationObject: {},
  },
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_ORDER:
      return {
        ...state,
        ...action.payload.data,
        validation: action.payload.validation,
      };
    case INITIALISE_ITEM_ORDER_WITH_NEWROW:
      var row = action.payload.row;
      var items = "items" in state ? state["items"] : {};
      console.log(emptyRow);
      var update = { ...items, [Number(row) + 1]: {} };

      update = Object.keys(update).reduce(function(obj, key, index) {
        var item = update[key];
        item[ITEM.V_SNO] = index + 1;
        item[ITEM.ITEM_QTY] = index + 10;
        obj[Number(index)] = item;

        return obj;
      }, {});

      return {
        ...state,
        items: update,
      };

    case UPDATE_ITEM_ORDER:
      var updatedRow = action.payload.updatedRow;
      var rowIndex = action.payload.fieldIndex;
      var items = "items" in state ? state["items"] : {};
      var update = { ...items, [rowIndex]: updatedRow };

      return {
        ...state,
        items: update,
      };
    case REMOVE_ITEM_ORDER:
      var row = action.payload.row;
      var items = "items" in state ? state["items"] : {};
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
        ...state,
        items: update,
      };
    default:
      return state;
  }
};
