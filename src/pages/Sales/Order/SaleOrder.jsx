import React,{useState,Component} from "react";
import moment from "moment";
import AdvanceForm from "../../../js/FormAdvanced";
import $ from 'jquery'
import * as jQuery from "jquery"
import Cleave from "cleave.js";
import {UDLSelect,CalendarInput,CardBodyHeader} from '../../../Common/Component/General/index.js';
import OrderHeader from './OrderHeader';
import OrderItemdetails from './OrderItemdetails';
import ExpenseHeaderControl from './ExpenseHeaderControl';
/* eslint-disable array-callback-return */
import {Promise} from "bluebird";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _, { set } from 'lodash';
import {
  getFilteredList
  , getList
} from '../../../redux/listRedux/listAction';

import {
  updateOrder, updateItemOrder, removeItemOrder
} from '../../../redux/orderRedux/orderAction';

import {
  stateChange
} from './OrderLogic';
import {
  SaveCancelButtons,
} from "../../../Common/Component/General/index.js";


export class SaleOrderPage extends Component {
  constructor(props) {
    super(props);
    this.setDefaultData();
    this.HandleStateUpdate = this.HandleStateUpdate.bind(this);
    this.handleItemStateUpdate = this.handleItemStateUpdate.bind(this);
    this.handleItemStateCreate = this.handleItemStateCreate.bind(this);
    this.handleItemStateRemove = this.handleItemStateRemove.bind(this);
  }
  setDefaultData() {
    //let clonedState = clone(this.props.orderData, true);

    switch (this.props.order_type) {
      case 'Add': {

        break;
      }
      default:
    }
  }

  async HandleStateUpdate(keyValueArray) {
    let clonedState = _.cloneDeep(this.props.orderData);

    await Promise.map(keyValueArray, async (keyValue) => {
      let temp_state = await stateChange(keyValue.Key, keyValue.Value, clonedState, this.props.listData);

      clonedState = set(temp_state, keyValue.Key, keyValue.Value);
    });

    this.props.updateOrder(clonedState);
  }

  handleItemStateUpdate(keyValueArray, row) {
    let clonedItemState = _.cloneDeep(this.props.orderData.items[row]);

    keyValueArray.map((keyValue) => {
      clonedItemState =  set(clonedItemState, keyValue.Key, keyValue.Value);
    });

    this.props.updateItemOrder(clonedItemState, row);
  };

  handleItemStateCreate(keyValueArray, row) {
    this.props.updateItemOrder(keyValueArray, row);
  }

  handleItemStateRemove(row) {
    this.props.removeItemOrder(row);
  }
  render() {
  return (
    <>
      <div className="form-group">
      <form >
        <div className="main-content">
          <div id="app">
            <section className="section">
              <div className="section-header">
                <h1>Sale Order</h1>
              </div>
            
            </section>
            <div className="section-body"></div>
    
           <OrderHeader 
              orderData={ this.props.orderData}
              getList={this.props.getList}
              listData={this.props.listData}
              getFilteredList={this.props.getFilteredList}
              handleStateUpdate={this.HandleStateUpdate}
             /> 
            
             <OrderItemdetails/>
            {/* <ExpenseHeaderControl/>
             <SaveCancelButtons/> */}
             </div>
          </div>
      </form>
    </div>
   </>
  );
  }
}

const mapStateToProps = (state, ownProps) => {
	return {
    order_type: ownProps.order_type,
    order_id: ownProps.order_id,
		orderData: state.orderData,
		listData: state.listData,
    authData: state.authData,
	};
}

const mapDispatchToProps = (dispatch) => {
  return {
    getList: (list_type) => {
      return dispatch(getList(list_type));
    },
    getFilteredList: (list_type, filter) => {
      return dispatch(getFilteredList(list_type, filter))
    },
    updateOrder: (orderData) => {
      return dispatch(updateOrder(orderData));
    },
    updateItemOrder: (itemData, row) => {
      return dispatch(updateItemOrder(itemData, row));
    },
    removeItemOrder: (row) => {
      return dispatch(removeItemOrder(row));
    }
  }  
};

SaleOrderPage.propTypes = {
  order_type: PropTypes.string.isRequired,
  order_id: PropTypes.string.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(SaleOrderPage);