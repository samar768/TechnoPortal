import React,{useState,Component,useEffect} from "react";
import OrderHeader from './OrderHeader';
import OrderItemdetails from './OrderItemdetails';
import ExpenseHeaderControl from './ExpenseHeaderControl';
import {SaveCancelButtons} from '../../../Common/Component/General/index';
/* eslint-disable array-callback-return */
import {Promise} from "bluebird";
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import _, { set } from 'lodash';
import {
  getFilteredList
  , getList
} from '../../../redux/listRedux/listAction';

import {
  updateOrder, updateItemOrder, removeItemOrder,
  initialiseSord,updateHeaderOrderData,PersistOrderData
} from '../../../redux/orderRedux/orderAction';

import {
  stateChange
} from './OrderLogic';

function SaleOrderPage (props) {
  const dispatch=useDispatch();
  	// retrieve the Sord saved data on load
	 useEffect(() => {
    dispatch(initialiseSord(props.orderData));
	}, []);

  const setDefaultData=()=> {
    //let clonedState = clone(this.props.orderData, true);

    switch (props.order_type) {
      case 'Add': {

        break;
      }
      default:
    }
  }
  const  HandleStateUpdate=async(keyValueArray)=> {
    let clonedState = _.cloneDeep(props.orderData);

    await Promise.map(keyValueArray, async (keyValue) => {
      let temp_state = await stateChange(keyValue.Key, keyValue.Value, clonedState, props.listData);

      clonedState = set(temp_state, keyValue.Key, keyValue.Value);
    });

    // props.updateHeaderOrderData(clonedState);

    dispatch(updateHeaderOrderData(clonedState));
  }

  // const handleItemStateUpdate=(keyValueArray, row)=> {
  //   let clonedItemState = _.cloneDeep(props.orderData.items[row]);

  //   keyValueArray.map((keyValue) => {
  //     clonedItemState =  set(clonedItemState, keyValue.Key, keyValue.Value);
  //   });

  //   props.updateItemOrder(clonedItemState, row);
  // };

  // const handleItemStateCreate=(keyValueArray, row)=> {
  //   props.updateItemOrder(keyValueArray, row);
  // }

  // const handleItemStateRemove=(row)=> {
  //   props.removeItemOrder(row);
  // }

  
  function handleOnSaveClick(e) {
    e.preventDefault();
  // alert('The link was clicked.');
   dispatch(PersistOrderData(props.orderData));
  }
  
  
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
              orderData={props.orderData}
              getList={props.getList}
              listData={props.listData}
              getFilteredList={props.getFilteredList}
              handleStateUpdate={HandleStateUpdate}
             />  
            
           <OrderItemdetails/> 
            {/* <ExpenseHeaderControl/>*/}
             <SaveCancelButtons handleronSaveClick={handleOnSaveClick}/>  
             </div>
          </div>
      </form>
    </div>
   </>
  );
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