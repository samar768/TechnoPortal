import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import _, { get } from "lodash";
import { connect } from "react-redux";
import {
  CardBodyHeader,
  ChildItemsControl,
  TextInput,
} from "../../../Common/Component/General/index.js";

// initialise column headers
const columnHeaders = [
  {
    dataField: "DESCRIPTION",
    text: "Description",
    isCurrency: false,
    isPercentage: false,
    numDecimals: 0,
    totalField: false,
    isUdlMapping: false,
    udlCode: "",
  },
  {
    dataField: "SERIAL_NUM",
    text: "Serial Number",
    isCurrency: false,
    isPercentage: false,
    numDecimals: 0,
    totalField: false,
    isUdlMapping: false,
    udlCode: "",
  },
  {
    dataField: "SI",
    text: "Sum Insured",
    isCurrency: true,
    isPercentage: false,
    numDecimals: 0,
    totalField: true,
    isUdlMapping: false,
    udlCode: "",
  },
];

function OrderItemdetails(props) {
  // i
  const processPersistChildItem = (props) => {
    console.log("processPersistChildItem called");
  };

  const updateActiveItem = (props) => {
    console.log("updateActiveItem called");
  };

  return (
    <div className="section-body">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <ChildItemsControl
                      riskObject={props.riskEe}
                      childItems={[]}
                      activeItem={[]}
                      processPersistChildItem={processPersistChildItem}
                      updateActiveItem={updateActiveItem}
                      columnHeaders={columnHeaders}
                      isLoading={false}
                      modalId="ORDER_ITEMS"
                      tableHeaderText="Order Items"
                      modalHeaderText="Order Item"
                      hasRateButton={true}
                    >
                      <div>
                        <CardBodyHeader headerText="Item Details" />
                        <div className="row">
                          <TextInput
                            inputId="ITEM__ItemName"
                            labelDescription="ItemName"
                            inputSizes={[
                              "col-6",
                              "col-sm-6",
                              "col-md-6",
                              "col-lg-4",
                            ]}
                            defaultValue={get(
                              props.activeItem,
                              "ITEM__ItemName",
                              ""
                            )}
                            value={get(props.activeItem, "ITEM__ItemName", "")}
                            handleOnChange={(event) =>
                              this.handleStateUpdates([
                                {
                                  Key: "ITEM__ItemName",
                                  Value: event.target.value,
                                },
                              ])
                            }
                            isDisabled={false}
                            isMandatory={true}
                            isValid={true}
                            validationMessage={""}
                            isLoading={false}
                          />
                          <TextInput
                            inputId="EE__EE_ITEM__DESCRIPTION"
                            labelDescription="Description"
                            inputSizes={[
                              "col-6",
                              "col-sm-6",
                              "col-md-6",
                              "col-lg-4",
                            ]}
                            defaultValue={get(
                              props.activeItem,
                              "DESCRIPTION",
                              ""
                            )}
                            value={get(props.activeItem, "DESCRIPTION", "")}
                            handleOnChange={(event) =>
                              this.handleStateUpdates([
                                {
                                  Key: "DESCRIPTION",
                                  Value: event.target.value,
                                },
                              ])
                            }
                            isDisabled={false}
                            isMandatory={true}
                            isValid={true}
                            validationMessage={""}
                            isLoading={false}
                          />
                          <TextInput
                            inputId="ITEM__BF"
                            labelDescription="BF"
                            inputSizes={[
                              "col-6",
                              "col-sm-6",
                              "col-md-6",
                              "col-lg-4",
                            ]}
                            defaultValue={get(props.activeItem, "BF", "")}
                            value={get(props.activeItem, "BF", "")}
                            handleOnChange={(event) =>
                              this.handleStateUpdates([
                                {
                                  Key: "BF",
                                  Value: event.target.value,
                                },
                              ])
                            }
                            isDisabled={false}
                            isMandatory={true}
                            isValid={true}
                            validationMessage={""}
                            isLoading={false}
                          />
                        </div>
                        <div className="row">
                          <TextInput
                            inputId="ITEM__Width"
                            labelDescription="Width"
                            inputSizes={[
                              "col-6",
                              "col-sm-6",
                              "col-md-6",
                              "col-lg-4",
                            ]}
                            defaultValue={get(
                              props.activeItem,
                              "ITEM__Width",
                              ""
                            )}
                            value={get(props.activeItem, "ITEM__Width", "")}
                            handleOnChange={(event) =>
                              this.handleStateUpdates([
                                {
                                  Key: "ITEM__Width",
                                  Value: event.target.value,
                                },
                              ])
                            }
                            isDisabled={false}
                            isMandatory={true}
                            isValid={true}
                            validationMessage={""}
                            isLoading={false}
                          />
                          <TextInput
                            inputId="ITEM__Length"
                            labelDescription="Length"
                            inputSizes={[
                              "col-6",
                              "col-sm-6",
                              "col-md-6",
                              "col-lg-4",
                            ]}
                            defaultValue={get(props.activeItem, "Length", "")}
                            value={get(props.activeItem, "Length", "")}
                            handleOnChange={(event) =>
                              this.handleStateUpdates([
                                {
                                  Key: "Length",
                                  Value: event.target.value,
                                },
                              ])
                            }
                            isDisabled={false}
                            isMandatory={true}
                            isValid={true}
                            validationMessage={""}
                            isLoading={false}
                          />
                          <TextInput
                            inputId="ITEM__UNIT"
                            labelDescription="Unit"
                            inputSizes={[
                              "col-6",
                              "col-sm-6",
                              "col-md-6",
                              "col-lg-4",
                            ]}
                            defaultValue={get(
                              props.activeItem,
                              "ITEM__UNIT",
                              ""
                            )}
                            value={get(props.activeItem, "ITEM__UNIT", "")}
                            handleOnChange={(event) =>
                              this.handleStateUpdates([
                                {
                                  Key: "ITEM__UNIT",
                                  Value: event.target.value,
                                },
                              ])
                            }
                            isDisabled={false}
                            isMandatory={true}
                            isValid={true}
                            validationMessage={""}
                            isLoading={false}
                          />
                        </div>
                        <div className="row">
                          <TextInput
                            inputId="ITEM__GRAIN"
                            labelDescription="Grain"
                            inputSizes={[
                              "col-6",
                              "col-sm-6",
                              "col-md-6",
                              "col-lg-4",
                            ]}
                            defaultValue={get(
                              props.activeItem,
                              "ITEM__GRAIN",
                              ""
                            )}
                            value={get(props.activeItem, "ITEM__GRAIN", "")}
                            handleOnChange={(event) =>
                              this.handleStateUpdates([
                                {
                                  Key: "ITEM__GRAIN",
                                  Value: event.target.value,
                                },
                              ])
                            }
                            isDisabled={false}
                            isMandatory={true}
                            isValid={true}
                            validationMessage={""}
                            isLoading={false}
                          />
                          <TextInput
                            inputId="ITEM__GSM"
                            labelDescription="GSM"
                            inputSizes={[
                              "col-6",
                              "col-sm-6",
                              "col-md-6",
                              "col-lg-4",
                            ]}
                            defaultValue={get(
                              props.activeItem,
                              "ITEM__GSM",
                              ""
                            )}
                            value={get(props.activeItem, "ITEM__GSM", "")}
                            handleOnChange={(event) =>
                              this.handleStateUpdates([
                                {
                                  Key: "ITEM__GSM",
                                  Value: event.target.value,
                                },
                              ])
                            }
                            isDisabled={false}
                            isMandatory={true}
                            isValid={true}
                            validationMessage={""}
                            isLoading={false}
                          />
                          <TextInput
                            inputId="ITEM__REELPACK"
                            labelDescription="Reel/Pack"
                            inputSizes={[
                              "col-6",
                              "col-sm-6",
                              "col-md-6",
                              "col-lg-4",
                            ]}
                            defaultValue={get(
                              props.activeItem,
                              "ITEM__REELPACK",
                              ""
                            )}
                            value={get(props.activeItem, "ITEM__REELPACK", "")}
                            handleOnChange={(event) =>
                              this.handleStateUpdates([
                                {
                                  Key: "ITEM__REELPACK",
                                  Value: event.target.value,
                                },
                              ])
                            }
                            isDisabled={false}
                            isMandatory={true}
                            isValid={true}
                            validationMessage={""}
                            isLoading={false}
                          />
                        </div>
                        <div className="row">
                          <TextInput
                            inputId="ITEM__SKU"
                            labelDescription="SKU"
                            inputSizes={[
                              "col-6",
                              "col-sm-6",
                              "col-md-6",
                              "col-lg-4",
                            ]}
                            defaultValue={get(
                              props.activeItem,
                              "ITEM__SKU",
                              ""
                            )}
                            value={get(props.activeItem, "ITEM__SKU", "")}
                            handleOnChange={(event) =>
                              this.handleStateUpdates([
                                {
                                  Key: "ITEM__SKU",
                                  Value: event.target.value,
                                },
                              ])
                            }
                            isDisabled={false}
                            isMandatory={true}
                            isValid={true}
                            validationMessage={""}
                            isLoading={false}
                          />
                          <TextInput
                            inputId="ITEM__RATE"
                            labelDescription="RATE"
                            inputSizes={[
                              "col-6",
                              "col-sm-6",
                              "col-md-6",
                              "col-lg-4",
                            ]}
                            defaultValue={get(
                              props.activeItem,
                              "ITEM__RATE",
                              ""
                            )}
                            value={get(props.activeItem, "ITEM__RATE", "")}
                            handleOnChange={(event) =>
                              this.handleStateUpdates([
                                {
                                  Key: "ITEM__RATE",
                                  Value: event.target.value,
                                },
                              ])
                            }
                            isDisabled={false}
                            isMandatory={true}
                            isValid={true}
                            validationMessage={""}
                            isLoading={false}
                          />
                          <TextInput
                            inputId="ITEM__AMOUNT"
                            labelDescription="Amount"
                            inputSizes={[
                              "col-6",
                              "col-sm-6",
                              "col-md-6",
                              "col-lg-4",
                            ]}
                            defaultValue={get(
                              props.activeItem,
                              "ITEM__AMOUNT",
                              ""
                            )}
                            value={get(props.activeItem, "ITEM__AMOUNT", "")}
                            handleOnChange={(event) =>
                              this.handleStateUpdates([
                                {
                                  Key: "ITEM__AMOUNT",
                                  Value: event.target.value,
                                },
                              ])
                            }
                            isDisabled={false}
                            isMandatory={true}
                            isValid={true}
                            validationMessage={""}
                            isLoading={false}
                          />
                        </div>
                        <div className="row">
                          <TextInput
                            inputId="ITEM__WEIGHT"
                            labelDescription="Weight"
                            inputSizes={[
                              "col-6",
                              "col-sm-6",
                              "col-md-6",
                              "col-lg-4",
                            ]}
                            defaultValue={get(
                              props.activeItem,
                              "ITEM__WEIGHT",
                              ""
                            )}
                            value={get(props.activeItem, "ITEM__WEIGHT", "")}
                            handleOnChange={(event) =>
                              this.handleStateUpdates([
                                {
                                  Key: "ITEM__WEIGHT",
                                  Value: event.target.value,
                                },
                              ])
                            }
                            isDisabled={false}
                            isMandatory={true}
                            isValid={true}
                            validationMessage={""}
                            isLoading={false}
                          />
                          <TextInput
                            inputId="ITEM__SECONDARYUNIT"
                            labelDescription="Sec. Unit"
                            inputSizes={[
                              "col-6",
                              "col-sm-6",
                              "col-md-6",
                              "col-lg-4",
                            ]}
                            defaultValue={get(
                              props.activeItem,
                              "ITEM__SECONDARYUNIT",
                              ""
                            )}
                            value={get(
                              props.activeItem,
                              "ITEM__SECONDARYUNIT",
                              ""
                            )}
                            handleOnChange={(event) =>
                              this.handleStateUpdates([
                                {
                                  Key: "ITEM__SECONDARYUNIT",
                                  Value: event.target.value,
                                },
                              ])
                            }
                            isDisabled={false}
                            isMandatory={true}
                            isValid={true}
                            validationMessage={""}
                            isLoading={false}
                          />
                          <TextInput
                            inputId="ITEM__WEIGHTSKU"
                            labelDescription="Weight(SKU)"
                            inputSizes={[
                              "col-6",
                              "col-sm-6",
                              "col-md-6",
                              "col-lg-4",
                            ]}
                            defaultValue={get(
                              props.activeItem,
                              "ITEM__WEIGHTSKU",
                              ""
                            )}
                            value={get(props.activeItem, "ITEM__WEIGHTSKU", "")}
                            handleOnChange={(event) =>
                              this.handleStateUpdates([
                                {
                                  Key: "ITEM__WEIGHTSKU",
                                  Value: event.target.value,
                                },
                              ])
                            }
                            isDisabled={false}
                            isMandatory={true}
                            isValid={true}
                            validationMessage={""}
                            isLoading={false}
                          />
                        </div>
                        <div className="row">
                       
                        {/* <div className="form-group col-12,col-sm-12,col-md-12,col-lg-12">
                        <div>
                          <a href="#" className="btn btn-secondary">   </a>
                           </div>
                          </div> */}
                        </div>
                      </div>
                    </ChildItemsControl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderItemdetails;
