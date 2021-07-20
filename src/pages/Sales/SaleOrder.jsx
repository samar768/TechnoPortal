import React,{useState} from "react";
import moment from "moment";
import AdvanceForm from "../../js/FormAdvanced";
import $ from 'jquery'
import * as jQuery from "jquery"
import Cleave from "cleave.js";
import {UDLSelect} from '../../Common/Component/General/index.js';

export default function SaleOrderPage() {

  return (
    <>
      {/* <div className="main-content">
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
       </section>
</div> */}
      <div className="main-content">
        <div id="app">
          <section className="section">
            <div className="section-header">
              <h1>Sale Order</h1>
            </div>
            <div id="divsaleheader" className="col-6 col-md-6 col-lg-12">
                <div className="card">
              <div className="row">
                <div className="col-12" >
                  <div className="card card-primary">
                    <div className="card-body">
                      <div className="row">
                        <div className="form-group col-6">
                          <label htmlFor="V_type">Voucher Type</label>
                          <input
                            id="V_type"
                            type="text"
                            className="form-control"
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
                          <label>Date</label>
                          <input
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
              <div className="card">
                <div className="card-header">
                  <h4>Date &amp; Time Picker</h4>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label>Date Picker</label>
                    <input type="text" className="form-control datepicker" />
                  </div>
                  <div className="form-group">
                    <label>Date Time Picker</label>
                    <input
                      type="text"
                      className="form-control datetimepicker"
                    />
                  </div>

                  <div className="form-group">
                    <label>Date Range Picker</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fas fa-calendar"></i>
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control daterange-cus"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Time Picker</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fas fa-clock"></i>
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control timepicker"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                  <UDLSelect
                      udlListName='UDL_VoucherType'
                      selectId='GROUP_FIRE__RI_LIMIT_NUMBER_POST'
                      selectSizes={['col-6', 'col-sm-6', 'col-md-6', 'col-lg-3']}
                      defaultPleaseSelect={true}
                      defaultValue=""
                      handleOnChange=""
                      labelDescription='Reinsurance Limit Number'
                      isDisabled={true}
                      isMandatory={true}
                      isValid={true}
                      validationMessage=""
                      exclusionList={['1', '7', '8', '9', '10', '11', '12', '2', '3', '4', '6', '7', '5']}
                      isLoading={true}
								/>
                </div>
                </div>

              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
