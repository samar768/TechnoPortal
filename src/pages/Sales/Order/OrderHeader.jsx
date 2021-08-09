/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import _, { get } from "lodash";
import { connect } from "react-redux";
import {
  TYPE,
  PARTY_ORDER_NO,
  PARTY_ORDER_DATE,
  ORDER_NO,
  ORDER_DATE,
  AGAINST_FORM,
  EXCISABLE,
  PARTY,
  DELIVERY_TO,
  DISTRIBUTOR,
  DELIVERY_DATE,
  ORDER_TYPE,
  AMENDMENT_ORDER_NO,
  CONTRACTUAL_ORDER_REF,
  CONSIGNEE,
  SALES_TYPE,
  TO_PLACE,
} from "../../../Common/OrderContstant/order.js";
//  import format from 'date-fns/format';

import {
  ORDER_TYPES_LIST,
  AGAINST_FORM_LIST,
  YES_NO_LIST,
  PARTY_LIST,
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
  GSM_LIST,
} from "../../../Common/OrderContstant/list";

import {
  SaveCancelButtons,
  CalendarInput,
  TextInput,
  UDLSelect,
} from "../../../Common/Component/General/index.js";
import format from "date-fns/format";
import { HEADER_TABLE } from "../../../Common/OrderContstant/order.js";

function OrderHeader(props) {
  // console.log('OrderHeader');
  // console.log(props.orderData);
  const [partyFilter, setPartyFilter] = React.useState("");
  const [deliveryToFilter, setDeliveryToFilter] = React.useState("");

  // const [startDate, setStartDate] = useState( format(new Date(), 'yyyy-MM-dd 00:00:00') );

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

  useEffect(() => { }, [props.orderData]);

  // -===================================Samar Implementation================================
  const [inputValues, setInputValues] = useState({});

  // var handleStateUpdates = (event,data) => {
  //   let keyValueArray=[{ Key: event.target.name, Value: event.target.value }] ;
  //   props.handleStateUpdate(keyValueArray);
  // };

  var handleStateUpdates = (keyValueArray) => {
    props.handleStateUpdate(keyValueArray);
  }

  const handleOnDateChange = (event) => {
    let keyValueArray = [{
      Key: event.target.name,
      Value: event.target.value === '' ?
        format(new Date(), 'yyyy-MM-dd 00:00:00') :
        format(event.target.value, 'yyyy-MM-dd 00:00:00')
    }];
    props.handleStateUpdate(keyValueArray);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form has been submit");
  };

  return (

    <div className='form-group'>
      <form onSubmit={onFormSubmit}>
        <div className="main-content">
          <div id="app">
            <section className="section">
              <div className="section-header">
                <h1>Sale Order</h1>
              </div>
            </section>
            <div className="section-body">
              <div className="row">
                <div className="col-12 col-md-12 col-lg-12" >
                  <div className="card">
                    <div className="card-body">
                      <ul className="nav nav-tabs" id="myTab5" role="tablist">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="home-tab5"
                            data-toggle="tab"
                            href="#home5"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                          >
                            <i className="fas fa-home"></i> General
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="profile-tab5"
                            data-toggle="tab"
                            href="#profile5"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                          >
                            <i className="fas fa-id-card"></i> Terms&Condition
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content" id="myTabContent5">
                        <div
                          className="tab-pane fade show active"
                          id="home5"
                          role="tabpanel"
                          aria-labelledby="home-tab5"
                        >
                          <div className="card">
                            <div className="row">
                              <div className="col-sm-12 col-md-12 col-lg-12 ">
                                <div className="card card-primary">
                                  <div className="card-body">
                                    {/* Voucher type Row */}
                                    <div className="row">
                                    <UDLSelect
                                      udlListName='VOUCHERTYPE'
                                      udlListType='VOUCHERTYPE'
                                      selectId={TYPE}
                                      selectSizes={['col-sm-12 col-md-4 col-lg-4']}
                                      defaultPleaseSelect={true}
                                      defaultValue={get(props.orderData, TYPE, "")}
                                      value={get(props.orderData, TYPE, "")}
                                      handleOnChange={(event) => handleStateUpdates([{ Key: TYPE, Value: event.target.value }], false, true, false)}
                                      labelDescription='VoucherType'
                                      isDisabled={false}
                                      isMandatory={true}
                                      isValid={true}
                                     // validationMessage={'Please select voucher type'}
                                      isLoading={false}
                                      exclusionList={[]}
                                      orderListBy='Code'
                                    />

                                      <TextInput
                                        inputId={PARTY}
                                        labelDescription="Party Order No"
                                        inputSizes={["col-sm-12 col-md-4 col-lg-4"]}
                                        isDisabled={false}
                                        isMandatory={true}
                                        value={get(props.orderData, PARTY_ORDER_NO, "")}
                                        handleOnChange={(event) => { handleStateUpdates([{ Key: PARTY_ORDER_NO, Value: event.target.value }]) }}
                                        isValid={true}
                                        validationMessage=""
                                      />
                                      <CalendarInput
                                        inputId={ORDER_DATE}
                                        labelDescription='Party Order Date'
                                        inputSizes={['col-sm-12 col-md-4 col-lg-4']}
                                        isMandatory={true}
                                        handleOnChange={(dateValue) => handleStateUpdates([{
                                          Key: ORDER_DATE,
                                          Value: dateValue === '' ?
                                            format(new Date(), 'yyyy-MM-dd 00:00:00') :
                                            format(dateValue, 'yyyy-MM-dd 00:00:00')
                                        }])}
                                        value={get(props.orderData, ORDER_DATE, format(new Date(), 'yyyy-MM-dd 00:00:00'))}
                                        isValid={true}
                                        validationMessage=''
                                        isLoading={props.isLoading}
                                        isDisabled={false}
                                      />
                                    </div>
                                    <div className="row">
                                      <TextInput
                                        inputId={AGAINST_FORM}
                                        labelDescription="Against Form"
                                        inputSizes={["col-sm-12 col-md-4 col-lg-4"]}
                                        isDisabled={false}
                                        isMandatory={true}
                                        value={get(props.orderData, AGAINST_FORM, "")}
                                        isValid={true}
                                        validationMessage=""
                                        handleOnChange={(event) => { handleStateUpdates([{ Key: AGAINST_FORM, Value: event.target.value }]) }}
                                      />
                                      <TextInput
                                        inputId={ORDER_NO}
                                        labelDescription="Order No"
                                        inputSizes={["col-sm-12 col-md-4 col-lg-4"]}
                                        isDisabled={false}
                                        isMandatory={true}
                                        value={get(props.orderData, ORDER_NO, "")}
                                        isValid={true}
                                        validationMessage=""
                                        handleOnChange={(event) => { handleStateUpdates([{ Key: ORDER_NO, Value: event.target.value }]) }}
                                      />
                                      <CalendarInput
                                        inputId={PARTY_ORDER_DATE}
                                        labelDescription='Party Order Date'
                                        inputSizes={["col-sm-12 col-md-4 col-lg-4"]}
                                        isMandatory={true}
                                        handleOnChange={(dateValue) => handleStateUpdates([{
                                          Key: PARTY_ORDER_DATE,
                                          Value: dateValue === '' ?
                                            format(new Date(), 'yyyy-MM-dd 00:00:00') :
                                            format(dateValue, 'yyyy-MM-dd 00:00:00')
                                        }])}
                                        value={get(props.orderData, PARTY_ORDER_DATE, format(new Date(), 'yyyy-MM-dd 00:00:00'))}
                                        isValid={true}
                                        validationMessage=''
                                        isLoading={props.isLoading}
                                        isDisabled={false}
                                      />

                                    </div>
                                    <div className="row">
                                      <TextInput
                                        inputId={PARTY}
                                        labelDescription="Party Name"
                                        inputSizes={["col-sm-12 col-md-4 col-lg-4"]}
                                        isDisabled={false}
                                        isMandatory={true}
                                        value={get(props.orderData, PARTY, "")}
                                        isValid={true}
                                        validationMessage=""
                                        handleOnChange={(event) => { handleStateUpdates([{ Key: PARTY, Value: event.target.value }]) }}
                                      />
                                      <TextInput
                                        inputId={DELIVERY_TO}
                                        labelDescription="Delivery To"
                                        inputSizes={["col-sm-12 col-md-4 col-lg-4"]}
                                        isDisabled={false}
                                        isMandatory={true}
                                        value={get(props.orderData, DELIVERY_TO, "")}
                                        isValid={true}
                                        validationMessage=""
                                        handleOnChange={(event) => { handleStateUpdates([{ Key: DELIVERY_TO, Value: event.target.value }]) }}
                                      />
                                    </div>
                                    <div className="row">
                                      <TextInput
                                        inputId={DISTRIBUTOR}
                                        labelDescription="Distributor"
                                        inputSizes={["col-sm-12 col-md-4 col-lg-4"]}
                                        isDisabled={true}
                                        isMandatory={true}
                                        value={get(props.orderData, DISTRIBUTOR, "")}
                                        isValid={true}
                                        validationMessage=""
                                        handleOnChange={(event) => { handleStateUpdates([{ Key: DISTRIBUTOR, Value: event.target.value }]) }}
                                      />

                                      <div className='form-group col-sm-12 col-md-4 col-lg-4'>
                                        <label htmlFor="TxtOrderType">Order type</label>
                                        <div>
                                          <select name="TxtOrderType" className="form-control form-select-sm" aria-label=".form-select-sm example">
                                            <option selected>Please Select a Value</option>
                                            <option value="P">Paper</option>
                                            <option value="S">Sheet</option>
                                            <option value="O">Other</option>
                                          </select>
                                        </div>
                                      </div>

                                      <CalendarInput
                                        inputId={DELIVERY_DATE}
                                        labelDescription='Delivery Date'
                                        inputSizes={["col-sm-12 col-md-4 col-lg-4"]}
                                        isMandatory={true}
                                        handleOnChange={(dateValue) => handleStateUpdates([{
                                          Key: DELIVERY_DATE,
                                          Value: dateValue === '' ?
                                            format(new Date(), 'yyyy-MM-dd 00:00:00') :
                                            format(dateValue, 'yyyy-MM-dd 00:00:00')
                                        }])}
                                        value={get(props.orderData, DELIVERY_DATE, format(new Date(), 'yyyy-MM-dd 00:00:00'))}
                                        isValid={true}
                                        validationMessage=''
                                        isLoading={props.isLoading}
                                        isDisabled={false}
                                      />
                                    </div>
                                    <div className="row">
                                      <TextInput
                                        inputId={CONSIGNEE}
                                        labelDescription="Consignee"
                                        inputSizes={["col-sm-12 col-md-4 col-lg-4"]}
                                        isDisabled={false}
                                        isMandatory={true}
                                        value={get(props.orderData, CONSIGNEE, "")}
                                        isValid={true}
                                        validationMessage=""
                                        handleOnChange={(event) => { handleStateUpdates([{ Key: CONSIGNEE, Value: event.target.value }]) }}
                                      />

                                      <div className='form-group col-sm-12 col-md-4 col-lg-4'>
                                        <label htmlFor="TxtPlaceTo">Place To</label>
                                        <div>
                                          <select name="TxtPlaceTo" className="form-control form-select-sm" aria-label=".form-select-sm example">
                                            <option selected>Please Select a Value</option>
                                            <option value="P">Kanpur</option>
                                            <option value="S">Mahoba</option>
                                            <option value="O">Dehli</option>
                                          </select>
                                        </div>
                                      </div>

                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 col-md-12 col-lg-12">
                              <div className="card">
                                <div className="card-header">
                                  <h4>Simple</h4>
                                </div>
                                <div className="card-body">
                                  <table className="table table-hover">
                                    <thead>
                                      <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                      </tr>
                                      <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                      </tr>
                                      <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="profile5"
                          role="tabpanel"
                          aria-labelledby="profile-tab5"
                        >
                          Sed sed metus vel lacus hendrerit tempus. Sed efficitur
                          velit tortor, ac efficitur est lobortis quis. Nullam
                          lacinia metus erat, sed fermentum justo rutrum ultrices.
                          Proin quis iaculis tellus. Etiam ac vehicula eros,
                          pharetra consectetur dui.
                        </div>
                        <div
                          className="tab-pane fade"
                          id="contact5"
                          role="tabpanel"
                          aria-labelledby="contact-tab5"
                        >
                          Vestibulum imperdiet odio sed neque ultricies, ut
                          dapibus mi maximus. Proin ligula massa, gravida in
                          lacinia efficitur, hendrerit eget mauris. Pellentesque
                          fermentum, sem interdum molestie finibus, nulla diam
                          varius leo, nec varius lectus elit id dolor.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="card">
                    <div className="card-header">
                      <h4>Expense List</h4>
                    </div>
                    <div className="card-body">
                      <table className="table table-sm">
                        <thead>
                          <tr>
                            <th scope="col">Expense</th>
                            <th scope="col">Per</th>
                            <th scope="col">Amount</th>

                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Gross</th>
                            <td>0</td>
                            <td>5000</td>


                          </tr>
                          <tr>
                            <th scope="row">Discount</th>
                            <td>10</td>
                            <td>500</td>

                          </tr>
                          <tr>
                            <th scope="row">Net Amount</th>
                            <td>0</td>
                            <td>4500</td>
                          </tr>
                        </tbody>
                      </table>
                      {/* <div className="section-title">Dark</div> */}
                    </div>
                  </div>

                </div>
              </div>

              <SaveCancelButtons />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

OrderHeader.propTypes = {
  getList: PropTypes.func.isRequired,
  orderData: PropTypes.object.isRequired,
  listData: PropTypes.object.isRequired,
  getFilteredList: PropTypes.func.isRequired,
  handleStateUpdate: PropTypes.func.isRequired,
};

export default connect()(OrderHeader);
