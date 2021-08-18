/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import _, { get } from "lodash";
import { connect } from "react-redux";
import {OrderHeaderFieldSchema} from "../../../Common/OrderContstant/order.js";
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
    }
   
    )();
  }, []);


  useEffect(() => {
    console.log(props.listData[ORDER_TYPES_LIST])
  }, [ORDER_TYPES_LIST]);

  // -===================================Samar Implementation================================
  const [inputValues, setInputValues] = useState({});

  // var handleStateUpdates = (event,data) => {
  //   let keyValueArray=[{ Key: event.target.name, Value: event.target.value }] ;
  //   props.handleStateUpdate(keyValueArray);
  // };

  var handleStateUpdates = (keyValueArray) => {
    props.handleStateUpdate(keyValueArray);
  };

  // const handleOnDateChange = (event) => {
  //   let keyValueArray = [
  //     {
  //       Key: event.target.name,
  //       Value:
  //         event.target.value === ""
  //           ? format(new Date(), "yyyy-MM-dd 00:00:00")
  //           : format(event.target.value, "yyyy-MM-dd 00:00:00"),
  //     },
  //   ];
  //   props.handleStateUpdate(keyValueArray);
  // };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form has been submit");
  };

  return (
    <div className="form-group">
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
                <div className="col-12 col-md-12 col-lg-12">
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
                                        udlListName={OrderHeaderFieldSchema.TYPE.masterName}
                                        udlListType={OrderHeaderFieldSchema.TYPE.masterType}
                                        selectId={OrderHeaderFieldSchema.TYPE.key}
                                        selectSizes={[
                                          "col-sm-12 col-md-4 col-lg-4",
                                        ]}
                                        defaultPleaseSelect={true}
                                        defaultValue={get(
                                          props.orderData,
                                          OrderHeaderFieldSchema.TYPE.key,
                                          ""
                                        )}
                                        value={get(props.orderData, OrderHeaderFieldSchema.TYPE.key, "")}
                                        handleOnChange={(event) =>
                                          handleStateUpdates(
                                            [
                                              {
                                                Key: OrderHeaderFieldSchema.TYPE.key,
                                                Value: event.target.value,
                                              },
                                            ],
                                            false,
                                            true,
                                            false
                                          )
                                        }
                                        labelDescription={OrderHeaderFieldSchema.TYPE.label}
                                        isDisabled={false}
                                        isMandatory={true}
                                        isValid={true}
                                        validationMessage={""}
                                        isLoading={false}
                                        exclusionList={[]}
                                        orderListBy="Code"
                                      />
                                      <TextInput
                                        inputId={OrderHeaderFieldSchema.ORDER_NO.key}
                                        labelDescription={OrderHeaderFieldSchema.ORDER_NO.label}
                                        inputSizes={[
                                          "col-sm-12 col-md-4 col-lg-4",
                                        ]}
                                        isDisabled={false}
                                        isMandatory={true}
                                        value={get(
                                          props.orderData,
                                          OrderHeaderFieldSchema.ORDER_NO.key,
                                          ""
                                        )}
                                        isValid={true}
                                        validationMessage=""
                                        handleOnChange={(event) => {
                                          handleStateUpdates([
                                            {
                                              Key: OrderHeaderFieldSchema.ORDER_NO.key,
                                              Value: event.target.value,
                                            },
                                          ]);
                                        }}
                                        maxLength={OrderHeaderFieldSchema.ORDER_NO.maxLength}
                                      />
                                      <CalendarInput
                                        inputId={OrderHeaderFieldSchema.ORDER_DATE.key}
                                        labelDescription={OrderHeaderFieldSchema.ORDER_DATE.label}
                                        inputSizes={[
                                          "col-sm-12 col-md-4 col-lg-4",
                                        ]}
                                        isMandatory={true}
                                        handleOnChange={(dateValue) =>
                                          handleStateUpdates([
                                            {
                                              Key: OrderHeaderFieldSchema.ORDER_DATE.key,
                                              Value:
                                                dateValue === ""
                                                  ? format(
                                                      new Date(),
                                                      "yyyy-MM-dd 00:00:00"
                                                    )
                                                  : format(
                                                      dateValue,
                                                      "yyyy-MM-dd 00:00:00"
                                                    ),
                                            },
                                          ])
                                        }
                                        value={get(
                                          props.orderData,
                                          OrderHeaderFieldSchema.ORDER_DATE.key,
                                          format(
                                            new Date(),
                                            "yyyy-MM-dd 00:00:00"
                                          )
                                        )}
                                        isValid={true}
                                        validationMessage=""
                                        isLoading={props.isLoading}
                                        isDisabled={false}
                                      />
                                    </div>
                                      {/* Party  Row */}
                                    <div className="row">
                                    <TextInput
                                        inputId={OrderHeaderFieldSchema.PARTY_ORDER_NO.key}
                                        labelDescription={OrderHeaderFieldSchema.PARTY_ORDER_NO.label}
                                        inputSizes={[
                                          "col-sm-12 col-md-4 col-lg-4",
                                        ]}
                                        isDisabled={false}
                                        isMandatory={true}
                                        value={get(
                                          props.orderData,
                                          OrderHeaderFieldSchema.PARTY_ORDER_NO.key,
                                          ""
                                        )}
                                        isValid={true}
                                        validationMessage=""
                                        handleOnChange={(event) => {
                                          handleStateUpdates([
                                            {
                                              Key: OrderHeaderFieldSchema.PARTY_ORDER_NO.key,
                                              Value: event.target.value,
                                            },
                                          ]);
                                        }}
                                        maxLength={OrderHeaderFieldSchema.PARTY_ORDER_NO.maxLength}
                                      />
                                     
                                      <CalendarInput
                                        inputId={OrderHeaderFieldSchema.ORDER_DATE.key}
                                        labelDescription={OrderHeaderFieldSchema.ORDER_DATE.label}
                                        inputSizes={[
                                          "col-sm-12 col-md-4 col-lg-4",
                                        ]}
                                        isMandatory={true}
                                        handleOnChange={(dateValue) =>
                                          handleStateUpdates([
                                            {
                                              Key: OrderHeaderFieldSchema.ORDER_DATE.key,
                                              Value:
                                                dateValue === ""
                                                  ? format(
                                                      new Date(),
                                                      "yyyy-MM-dd 00:00:00"
                                                    )
                                                  : format(
                                                      dateValue,
                                                      "yyyy-MM-dd 00:00:00"
                                                    ),
                                            },
                                          ])
                                        }
                                        value={get(
                                          props.orderData,
                                          OrderHeaderFieldSchema.ORDER_DATE.key,
                                          format(
                                            new Date(),
                                            "yyyy-MM-dd 00:00:00"
                                          )
                                        )}
                                        isValid={true}
                                        validationMessage=""
                                        isLoading={props.isLoading}
                                        isDisabled={false}
                                      />
                                      <UDLSelect
                                        udlListName={OrderHeaderFieldSchema.AGAINST_FORM.masterName}
                                        udlListType={OrderHeaderFieldSchema.AGAINST_FORM.masterType}
                                        selectId={OrderHeaderFieldSchema.AGAINST_FORM.key}
                                        selectSizes={[
                                          "col-sm-12 col-md-4 col-lg-4",
                                        ]}
                                        defaultPleaseSelect={true}
                                        defaultValue={get(
                                          props.orderData,
                                          OrderHeaderFieldSchema.AGAINST_FORM.key,
                                          ""
                                        )}
                                        value={get(props.orderData, OrderHeaderFieldSchema.AGAINST_FORM.key, "")}
                                        handleOnChange={(event) =>
                                          handleStateUpdates(
                                            [
                                              {
                                                Key: OrderHeaderFieldSchema.AGAINST_FORM.key,
                                                Value: event.target.value,
                                              },
                                            ],
                                            false,
                                            true,
                                            false
                                          )
                                        }
                                        labelDescription={OrderHeaderFieldSchema.AGAINST_FORM.label}
                                        isDisabled={false}
                                        isMandatory={true}
                                        isValid={true}
                                        validationMessage={""}
                                        isLoading={false}
                                        exclusionList={[]}
                                        orderListBy="Code"
                                      />
                                    </div>
                                    <div className="row">
                                    <UDLSelect
                                        udlListName={OrderHeaderFieldSchema.PARTY.masterName}
                                        udlListType={OrderHeaderFieldSchema.PARTY.masterType}
                                        selectId={OrderHeaderFieldSchema.PARTY.key}
                                        selectSizes={[
                                          "col-sm-12 col-md-6 col-lg-6",
                                        ]}
                                        defaultPleaseSelect={true}
                                        defaultValue={get(
                                          props.orderData,
                                          OrderHeaderFieldSchema.PARTY.key,
                                          ""
                                        )}
                                        value={get(props.orderData, OrderHeaderFieldSchema.PARTY.key, "")}
                                        handleOnChange={(event) =>
                                          handleStateUpdates(
                                            [
                                              {
                                                Key: OrderHeaderFieldSchema.PARTY.key,
                                                Value: event.target.value,
                                              },
                                            ],
                                            false,
                                            true,
                                            false
                                          )
                                        }
                                        labelDescription={OrderHeaderFieldSchema.PARTY.label}
                                        isDisabled={false}
                                        isMandatory={true}
                                        isValid={true}
                                        validationMessage={""}
                                        isLoading={false}
                                        exclusionList={[]}
                                        orderListBy="Code"
                                      />
                                       <UDLSelect
                                        udlListName={OrderHeaderFieldSchema.DELIVERY_TO.masterName}
                                        udlListType={OrderHeaderFieldSchema.DELIVERY_TO.masterType}
                                        selectId={OrderHeaderFieldSchema.DELIVERY_TO.key}
                                        selectSizes={[
                                          "col-sm-12 col-md-6 col-lg-6",
                                        ]}
                                        defaultPleaseSelect={true}
                                        defaultValue={get(
                                          props.orderData,
                                          OrderHeaderFieldSchema.DELIVERY_TO.key,
                                          ""
                                        )}
                                        value={get(props.orderData, OrderHeaderFieldSchema.DELIVERY_TO.key, "")}
                                        handleOnChange={(event) =>
                                          handleStateUpdates(
                                            [
                                              {
                                                Key: OrderHeaderFieldSchema.DELIVERY_TO.key,
                                                Value: event.target.value,
                                              },
                                            ],
                                            false,
                                            true,
                                            false
                                          )
                                        }
                                        labelDescription={OrderHeaderFieldSchema.DELIVERY_TO.label}
                                        isDisabled={false}
                                        isMandatory={true}
                                        isValid={true}
                                        validationMessage={""}
                                        isLoading={false}
                                        exclusionList={[]}
                                        orderListBy="Code"
                                      />
                                    </div>
                                    <div className="row">
                                      <TextInput
                                        inputId={OrderHeaderFieldSchema.DISTRIBUTOR.key}
                                        labelDescription={OrderHeaderFieldSchema.DISTRIBUTOR.label}
                                        inputSizes={[
                                          "col-sm-12 col-md-4 col-lg-4",
                                        ]}
                                        isDisabled={true}
                                        isMandatory={true}
                                        value={get(
                                          props.orderData,
                                          OrderHeaderFieldSchema.DISTRIBUTOR.label,
                                          ""
                                        )}
                                        isValid={true}
                                        validationMessage=""
                                        handleOnChange={(event) => {
                                          handleStateUpdates([
                                            {
                                              Key: OrderHeaderFieldSchema.DISTRIBUTOR.label,
                                              Value: event.target.value,
                                            },
                                          ]);
                                        }}
                                      />
                                      <UDLSelect
                                        udlListName={OrderHeaderFieldSchema.ORDER_TYPE.masterName}
                                        udlListType={OrderHeaderFieldSchema.ORDER_TYPE.masterType}
                                        selectId={OrderHeaderFieldSchema.ORDER_TYPE.key}
                                        selectSizes={[
                                          "col-sm-12 col-md-4 col-lg-4",
                                        ]}
                                        defaultPleaseSelect={true}
                                        defaultValue={get(
                                          props.orderData,
                                          OrderHeaderFieldSchema.ORDER_TYPE.key,
                                          ""
                                        )}
                                        value={get(props.orderData, OrderHeaderFieldSchema.ORDER_TYPE.key, "")}
                                        handleOnChange={(event) =>
                                          handleStateUpdates(
                                            [
                                              {
                                                Key: OrderHeaderFieldSchema.ORDER_TYPE.key,
                                                Value: event.target.value,
                                              },
                                            ],
                                            false,
                                            true,
                                            false
                                          )
                                        }
                                        labelDescription={OrderHeaderFieldSchema.ORDER_TYPE.label}
                                        isDisabled={false}
                                        isMandatory={true}
                                        isValid={true}
                                        validationMessage={""}
                                        isLoading={false}
                                        exclusionList={[]}
                                        orderListBy="Code"
                                      />

                                      <CalendarInput
                                        inputId={OrderHeaderFieldSchema.DELIVERY_DATE.label}
                                        labelDescription="Delivery Date"
                                        inputSizes={[
                                          "col-sm-12 col-md-4 col-lg-4",
                                        ]}
                                        isMandatory={true}
                                        handleOnChange={(dateValue) =>
                                          handleStateUpdates([
                                            {
                                              Key: OrderHeaderFieldSchema.DELIVERY_DATE.label,
                                              Value:
                                                dateValue === ""
                                                  ? format(
                                                      new Date(),
                                                      "yyyy-MM-dd 00:00:00"
                                                    )
                                                  : format(
                                                      dateValue,
                                                      "yyyy-MM-dd 00:00:00"
                                                    ),
                                            },
                                          ])
                                        }
                                        value={get(
                                          props.orderData,
                                          OrderHeaderFieldSchema.DELIVERY_DATE.label,
                                          format(
                                            new Date(),
                                            "yyyy-MM-dd 00:00:00"
                                          )
                                        )}
                                        isValid={true}
                                        validationMessage=""
                                        isLoading={props.isLoading}
                                        isDisabled={false}
                                      />
                                    </div>
                                    <div className="row">
                                    <UDLSelect
                                        udlListName={OrderHeaderFieldSchema.CONSIGNEE.masterName}
                                        udlListType={OrderHeaderFieldSchema.CONSIGNEE.masterType}
                                        selectId={OrderHeaderFieldSchema.CONSIGNEE.key}
                                        selectSizes={[
                                          "col-sm-12 col-md-6 col-lg-6",
                                        ]}
                                        defaultPleaseSelect={true}
                                        defaultValue={get(
                                          props.orderData,
                                          OrderHeaderFieldSchema.CONSIGNEE.key,
                                          ""
                                        )}
                                        value={get(props.orderData, OrderHeaderFieldSchema.CONSIGNEE.key, "")}
                                        handleOnChange={(event) =>
                                          handleStateUpdates(
                                            [
                                              {
                                                Key: OrderHeaderFieldSchema.CONSIGNEE.key,
                                                Value: event.target.value,
                                              },
                                            ],
                                            false,
                                            true,
                                            false
                                          )
                                        }
                                        labelDescription={OrderHeaderFieldSchema.CONSIGNEE.label}
                                        isDisabled={false}
                                        isMandatory={true}
                                        isValid={true}
                                        validationMessage={""}
                                        isLoading={false}
                                        exclusionList={[]}
                                        orderListBy="Code"
                                      />

                                        <UDLSelect
                                        udlListName={OrderHeaderFieldSchema.TO_PLACE.masterName}
                                        udlListType={OrderHeaderFieldSchema.TO_PLACE.masterType}
                                        selectId={OrderHeaderFieldSchema.TO_PLACE.key}
                                        selectSizes={[
                                          "col-sm-12 col-md-6 col-lg-6",
                                        ]}
                                        defaultPleaseSelect={true}
                                        defaultValue={get(
                                          props.orderData,
                                          OrderHeaderFieldSchema.TO_PLACE.key,
                                          ""
                                        )}
                                        value={get(props.orderData, OrderHeaderFieldSchema.TO_PLACE.key, "")}
                                        handleOnChange={(event) =>
                                          handleStateUpdates(
                                            [
                                              {
                                                Key: OrderHeaderFieldSchema.TO_PLACE.key,
                                                Value: event.target.value,
                                              },
                                            ],
                                            false,
                                            true,
                                            false
                                          )
                                        }
                                        labelDescription={OrderHeaderFieldSchema.TO_PLACE.label}
                                        isDisabled={false}
                                        isMandatory={true}
                                        isValid={true}
                                        validationMessage={""}
                                        isLoading={false}
                                        exclusionList={[]}
                                        orderListBy="Code"
                                      />
                                    </div>
                                  </div>
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
                          Sed sed metus vel lacus hendrerit tempus. Sed
                          efficitur velit tortor, ac efficitur est lobortis
                          quis. Nullam lacinia metus erat, sed fermentum justo
                          rutrum ultrices. Proin quis iaculis tellus. Etiam ac
                          vehicula eros, pharetra consectetur dui.
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
