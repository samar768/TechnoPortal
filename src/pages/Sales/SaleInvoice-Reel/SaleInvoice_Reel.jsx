import React from 'react'
import { connect } from 'react-redux'
import { CalendarInput, PageHeading } from './../../../Common/Component/General/index'
import format from 'date-fns/format';
import {
  TextInput,
} from "../../../Common/Component/General/index.js";
import { Dropdown } from 'react-bootstrap';

export const SaleInvoice_Reel = (props) => {

  var handleStateUpdates = (keyValueArray) => {
    console.log('date changed has called');
  }
  return (
    <div>
      <div className='main-content' id='divBCCover'>
        <section className='section'>
          <div className='row'>
            <div className="col-12 col-md-12 col-lg-12">
              <div className="card"  >
                <div>
                  <div className="row">

                  <div className="dropdown">
        <Dropdown>
        <Dropdown.Toggle 
        variant="secondary btn-sm" 
        id="dropdown-basic">
            Language
        </Dropdown.Toggle>

        <Dropdown.Menu style={{backgroundColor:'#73a47'}}>
            <Dropdown.Item href="#" >Arabic</Dropdown.Item>
            <Dropdown.Item href="#">English</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
</div>

                    <TextInput
                      inputId='TxtType'
                      labelDescription="Voucher Type"
                      inputSizes={["col-12 col-md-6 col-lg-6"]}
                      isDisabled={false}
                      isMandatory={true}
                      isValid={true}
                      validationMessage=""

                    />
                    <TextInput
                      inputId='TxtType'
                      labelDescription="Voucher Type"
                      inputSizes={["col-12 col-md-6 col-lg-6"]}
                      isDisabled={false}
                      isMandatory={true}
                      isValid={true}
                      validationMessage=""

                    />
                  </div>
                  <div className="row">
                    <TextInput
                      inputId='TxtType'
                      labelDescription="Name"
                      inputSizes={["col-12 col-md-6 col-lg-6"]}
                      isDisabled={false}
                      isMandatory={true}
                      isValid={true}
                      validationMessage=""

                    />
                    <TextInput
                      inputId='TxtType'
                      labelDescription="Last name"
                      inputSizes={["col-12 col-md-6 col-lg-6"]}
                      isDisabled={false}
                      isMandatory={true}
                      isValid={true}
                      validationMessage=""

                    />

                    <TextInput
                      inputId='TxtType'
                      labelDescription="Last name"
                      inputSizes={["col-12 col-md-6 col-lg-8"]}
                      isDisabled={false}
                      isMandatory={true}
                      isValid={true}
                      validationMessage=""

                    />


                  </div>
                  <div className="row">



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
