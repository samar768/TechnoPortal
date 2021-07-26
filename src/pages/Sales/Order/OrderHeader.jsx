/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import _, { get } from 'lodash';

import {
  TYPE, PARTY_ORDER_NO, PARTY_ORDER_DATE, ORDER_NO, ORDER_DATE, 
  AGAINST_FORM, EXCISABLE, PARTY, DELIVERY_TO, 
  DISTRIBUTOR, DELIVERY_DATE, ORDER_TYPE, AMENDMENT_ORDER_NO, 
  CONTRACTUAL_ORDER_REF, CONSIGNEE, SALES_TYPE, TO_PLACE
 } from '../../../Common/OrderContstant/order.js';
//  import format from 'date-fns/format';

import {
  ORDER_TYPES_LIST, 
  AGAINST_FORM_LIST, 
  YES_NO_LIST, PARTY_LIST, 
  DELIVERY_TO_LIST, 
  AMENDMENT_LIST, 
  CONSIGNEE_LIST, 
  V_TYPE_LIST, 
  TO_PLACE_LIST, 
  ORDER_TYPE_LIST, 
  ITEM_LIST, 
  BF_LIST,
  UNIT_LIST,
  GRAIN_LIST,
  GSM_LIST
 } from '../../../Common/OrderContstant/list';

 import {SaveCancelButtons,CalendarInput} from '../../../Common/Component/General/index.js'
 import format from 'date-fns/format';

function OrderHeader(props) {
    console.log('OrderHeader');
    console.log(props.orderData);
    const [partyFilter, setPartyFilter] = React.useState('');
    const [deliveryToFilter, setDeliveryToFilter] = React.useState('');
  
    useEffect(() => {
      (async () => {
        await props.getList(ORDER_TYPES_LIST);
        await props.getList(ORDER_TYPE_LIST);
        await props.getList(AGAINST_FORM_LIST);
        await props.getList(YES_NO_LIST);
        await props.getList(ORDER_TYPES_LIST);
        await props.getList(CONSIGNEE_LIST);
        await props.getList(V_TYPE_LIST); 
        await props.getList(TO_PLACE_LIST);
        await props.getList(ITEM_LIST);
        await props.getList(BF_LIST);
        await props.getList(UNIT_LIST);
        await props.getList(GRAIN_LIST);
        await props.getList(GSM_LIST);
      })();
    }, []);
  
    useEffect(() => {}, [props.orderData]);
  
    var handleStateUpdates = (keyValueArray) => {
      props.handleStateUpdate(keyValueArray);
    }
  
    const buildOptionList = (list_type) => {
      var response = [];
      
      if (!(_.has(props.listData, list_type))) return response;
  
      response = props.listData[list_type];
  
      return response;
    }
  
    const buildFilteredOptionList = (list_type, filter) => {
      var response = [];
  
      if (!(list_type in props.listData)) return response;
  
      if (_.isUndefined(filter) || filter.length === 0) return response;
  
      var list = props.listData[list_type];
      if (_.isUndefined(list)) return response;
  
      var temp_filter = filter.substring(0, 1);
      if (!_.has(list, temp_filter.toUpperCase())) return response;
  
      response = list[temp_filter.toUpperCase()]
  
      return response;
    }
  
    const searchOptionList = async (list_type, filter, setState) => {
      if (_.isUndefined(filter) | filter.length === 0) {
        setState('');
        return;
      } 
  
      var temp_filter = filter.substring(0, 1); 
      setState(temp_filter.toUpperCase());
  
      var list = props.listData[list_type];
      if (!_.isUndefined(list) && temp_filter.toUpperCase() in list) return;
  
      await props.getFilteredList(list_type, temp_filter);
    }
  return (
    <div>
     <div className="main-content">
        <div id="app">
          <section className="section">
            <div className="section-header">
              <h1>Sale Order</h1>
              <div className="section-header-breadcrumb">
            <div className="breadcrumb-item active">
              <a href="#">Dashboard</a>
            </div>
            <div className="breadcrumb-item">
              <a href="#">Layout</a>
            </div>
            <div className="breadcrumb-item">Default Layout</div>
          </div>
            </div>
            <div id="divsaleheader" className="col-6 col-md-6 col-lg-12">
              <div className="card">
              <div className="row">
                <div className="col-12" >
                  <div className="card card-primary">
                    <div className="card-body">
                       {/* Voucher type Row */}
                      <div className="row">
                     
                        <div className="form-group col-6">
                          <label htmlFor="V_type">Voucher Type</label>
                          <input
                            id="V_type"
                            type="text"
                            className="form-control required"
                            name="first_name"
                            autoFocus
                          />
                        </div>
                        <div className="form-group col-3">
                          <label htmlFor="v_date">Date</label>
                          <input
                            id="v_date"
                            type="text"
                            className="form-control"
                            name="first_name"
                            autoFocus
                          />
                        </div>
                        <div className="form-group col-3">
                        <CalendarInput
                            inputId='V_Date'
                            labelDescription='Voucher Date'
                            inputSizes={['col-6', 'col-sm-6', 'col-md-6', 'col-lg-4']}
                            isMandatory={false}
                            handleOnChange={(dateValue) => handleStateUpdates([{
                              Key: PARTY_ORDER_DATE,
                              Value: dateValue === '' ?
                                format(new Date(), 'yyyy-MM-dd 00:00:00') :
                                format(dateValue, 'yyyy-MM-dd 00:00:00')
                            }])}
                            value={get(props.orderData, ORDER_DATE, '')}
                            isValid={true}
                            validationMessage=''
                            isLoading={props.isLoading}
                            isDisabled={false}
						        	/>
                      </div>
</div>
                      <div className="row">
                        <div className="form-group col-6">
                          <label htmlFor="PartyName">Party Name</label>
                          <input
                            id="PartyName"
                            type="text"
                            className="form-control"
                            name="PartyName"
                            autoFocus
                          />
                        </div>
                        <div className="form-group col-3">
                          <label htmlFor="v_date">Order Date</label>
                          <input
                            id="PartyOrderNo"
                            type="text"
                            className="form-control"
                            name="Party Order N0"
                            autoFocus
                          />

                        </div>
                        <div className="form-group col-3">
                          <label>Party Orde Date</label>
                          <input
                            id="partyorddate"
                            type="text"
                            className="form-control datemask"
                            placeholder="YYYY/MM/DD"
                          />
                        </div>
                      </div>
                   
                    </div>
                  </div>
                </div>
              </div>
              </div>
             <SaveCancelButtons/>
            </div>
            <div className="section">
           
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

OrderHeader.propTypes = {
  getList: PropTypes.func.isRequired,
  orderData: PropTypes.object.isRequired,
  listData: PropTypes.object.isRequired,
  getFilteredList: PropTypes.func.isRequired,
  handleStateUpdate: PropTypes.func.isRequired,
}


export default OrderHeader



