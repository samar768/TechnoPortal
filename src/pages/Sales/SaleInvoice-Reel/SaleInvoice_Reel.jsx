import React from 'react'
import { connect } from 'react-redux'
import { CalendarInput, PageHeading } from './../../../Common/Component/General/index'
import format from 'date-fns/format';


export const SaleInvoice_Reel = (props) => {

  var handleStateUpdates = (keyValueArray) => {
    console.log('date changed has called');
  }
  return (
    <div className="main-content">
      <div id="app">
        <section className="section">
          <PageHeading PageHeading="Sale Invoice" />
          <div id="divmain" className="col-6 col-md-6 col-lg-12">
            <div className="card">
              <div className="row">
                <div className="col-12" >
                  <div className="card card-primary">
                    <div className="card-body">
                      <div className="row">

                        <div className="form-group col-12">
                            <CalendarInput
                              inputId='V_Date'
                              labelDescription='Voucher Date'
                              inputSizes={['col-6', 'col-sm-6', 'col-md-6', 'col-lg-4']}
                              isMandatory={false}
                              handleOnChange={() => false}
                              value={'01-01-2022'}
                              isValid={true}
                              validationMessage=''
                              isLoading={true}
                              isDisabled={true}
                            />
                            </div>
                          </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SaleInvoice_Reel)
