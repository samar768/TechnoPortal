import { combineReducers } from "redux";
import authReducers from "./authRedux/authReducer";
import orderReducers from "../pages/Sales/Order/Redux/orderReducer";
import listReducers from "./listRedux/listReducer";
import saleInvoiceReducers from "../pages/Sales/SaleInvoice-Reel/Redux/saleInvoiceReducer";

const rootReducer = combineReducers({
  authData: authReducers,
  listData: listReducers,
  orderData: orderReducers,
  invoiceData: saleInvoiceReducers,
});

export default rootReducer;
