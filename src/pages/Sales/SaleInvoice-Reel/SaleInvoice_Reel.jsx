// import React from 'react'
// import { connect } from 'react-redux'
// import { CalendarInput, PageHeading } from './../../../Common/Component/General/index'
// import format from 'date-fns/format';
// import {
//   TextInput,
// } from "../../../Common/Component/General/index.js";
// import { Dropdown } from 'react-bootstrap';

// export const SaleInvoice_Reel = (props) => {

//   var handleStateUpdates = (keyValueArray) => {
//     console.log('date changed has called');
//   }
//   return (
//     <div>
//       <div className='main-content' id='divBCCover'>
//         <section className='section'>
//           <div className='row'>
//             <div className="col-12 col-md-12 col-lg-12">
//               <div className="card"  >
//                 <div>
//                   <div className="row">

//                   <div className="dropdown">
//         <Dropdown>
//         <Dropdown.Toggle 
//         variant="secondary btn-sm" 
//         id="dropdown-basic">
//             Language
//         </Dropdown.Toggle>

//         <Dropdown.Menu style={{backgroundColor:'#73a47'}}>
//             <Dropdown.Item href="#" >Arabic</Dropdown.Item>
//             <Dropdown.Item href="#">English</Dropdown.Item>
//         </Dropdown.Menu>
//         </Dropdown>
// </div>

//                     <TextInput
//                       inputId='TxtType'
//                       labelDescription="Voucher Type"
//                       inputSizes={["col-12 col-md-6 col-lg-6"]}
//                       isDisabled={false}
//                       isMandatory={true}
//                       isValid={true}
//                       validationMessage=""

//                     />
//                     <TextInput
//                       inputId='TxtType'
//                       labelDescription="Voucher Type"
//                       inputSizes={["col-12 col-md-6 col-lg-6"]}
//                       isDisabled={false}
//                       isMandatory={true}
//                       isValid={true}
//                       validationMessage=""

//                     />
//                   </div>
//                   <div className="row">
//                     <TextInput
//                       inputId='TxtType'
//                       labelDescription="Name"
//                       inputSizes={["col-12 col-md-6 col-lg-6"]}
//                       isDisabled={false}
//                       isMandatory={true}
//                       isValid={true}
//                       validationMessage=""

//                     />
//                     <TextInput
//                       inputId='TxtType'
//                       labelDescription="Last name"
//                       inputSizes={["col-12 col-md-6 col-lg-6"]}
//                       isDisabled={false}
//                       isMandatory={true}
//                       isValid={true}
//                       validationMessage=""

//                     />

//                     <TextInput
//                       inputId='TxtType'
//                       labelDescription="Last name"
//                       inputSizes={["col-12 col-md-6 col-lg-8"]}
//                       isDisabled={false}
//                       isMandatory={true}
//                       isValid={true}
//                       validationMessage=""

//                     />


//                   </div>
//                   <div className="row">



//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </section>
//       </div>
//     </div>

//   )
// }

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(SaleInvoice_Reel)
 import React,{useState, Fragment,useRef} from 'react'
 import  {Typeahead}  from "react-bootstrap-typeahead";
const SEARCH_URI = 'https://api.github.com/search/users';

const SaleInvoice_Reel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const listitem =useRef("");
  const [IsValid, setIsValid] = useState(false);

  const handleSearch = (query) => {
    setIsLoading(true);

    console.log(listitem.current.value);

    setIsValid(true)

    // fetch(`${SEARCH_URI}?q=${query}+in:login&page=1&per_page=50`)
    //   .then((resp) => resp.json())
    //   .then(({ items }) => {
    //     const options = items.map((i) => ({
    //       avatar_url: i.avatar_url,
    //       id: i.id,
    //       login: i.login,
    //     }));

    //     setOptions(options);
   
    //   });

    
  };

  return (
    <div>
      <div className='main-content' id='divBCCover'>
        <section className='section'>
          <div className='row'>
            <div className="col-12 col-md-12 col-lg-12">
              <div className="card"  >
                <div>
                  <div className="row"></div> 
                  <div className='form-group col-12 col-md-6 col-lg-6'></div>
                    <Typeahead
                         ref={listitem}
                          clearButton
                          defaultSelected={options.slice(0, 1)}
                          id="selections-example"
                          labelKey={(option) => `<span>${option.code} ${option.description}</span>`}
                          onInputChange={(text, e) => { handleSearch(); }}
                          options={[
                            {
                              code:'samar',
                              description:'samarjeet sing'
                            },
                            {
                              code:'Amar',
                              description:'Amarjeet sing'
                            },
                            {
                              code:'--',
                              description:'ADD ITEM--'
                            }
                          ]}
                          placeholder="Choose a state..."
                        />
                        {
                         !IsValid?
                        <p>Please select an valid option</p>
                        :""
                        }
                </div>
              </div>
              </div>
    </div>
    
  </section>
          </div>
</div>
  );
};

export default SaleInvoice_Reel