import React from 'react'
import { copyOwnProps } from 'fullcalendar';
import PropTypes from 'prop-types';
import ModalConfirmation from './ModalConfirmation';



const SaveCancelButtons = (props) => {
  const [openConfirmationModal, setOpenConfirmationModal] = React.useState(false);


  const OnSubmitClickHandler=(event)=>{
	event.preventDefault();
   // initialise variables
   const parsedInvalidSections = props.invalidSections || [];
   const allSectionsValid = parsedInvalidSections.length === 0;
  
   // process finish button functionality 
   if (allSectionsValid) {
	 // process modal logic
	 setOpenConfirmationModal(false);
	 persistSordData(event);
  
   }
   else {
	 // process modal logic
	 setOpenConfirmationModal(true);
   }
   return false;
  }
  
  // get invalid sections
  const getInvalidSections = () => {
	  // initialise variables
	  const parsedInvalidSections = props.invalidSections || [];
  
	  // loop through invalid sections and return invalid sections
	  return (
		  <ul className="list-unstyled">
			  {parsedInvalidSections.map((is, index) => (
				  <li key={index}>
					  <p><i className="ion ion-chevron-right"></i> {is}</p>
				  </li>
			  ))}
		  </ul>
	  )
  };
  // persist risk data
  const persistSordData = (event) => {
		  // persist order details
	  props.handleronSaveClick(event);
  }
  
    return (
        <>
        <React.Fragment>
			<React.Fragment>
				<ModalConfirmation
					modalId='modalConfirmation'
					headerText={`${props.title} Completion Notification`}
					openModalConfirmation={openConfirmationModal}
					confirmation={false}
					handleOnNoClick={() => {
						// process finish logic
						setOpenConfirmationModal(false);

						// process finish button functionality
					//	props.setFinishButtonClicked(false);
					}}
					handleOnYesClick={() => {
						// process finish logic
						setOpenConfirmationModal(false);
						// process finish button functionality
						persistSordData();  
					}}>
					<div>
						<p>The following Order sections have outstanding errors - please confirm if you would like to proceed:</p>
						<br />
						<div>
							{getInvalidSections()}
						</div>
					</div>
				</ModalConfirmation>
			</React.Fragment>
	
      </React.Fragment>
            <div className="buttons">
            <div className="text-md-right">
              <div className="float-lg-right mb-lg-0 mb-3" ></div>
              <button  className="btn btn-success btn-icon icon-left" 
                      onClick={e=> OnSubmitClickHandler(e)}>
                         
              <i className="fas fa-check"></i>Save Order
              </button>
              {/* </button> */}
              <button className="btn btn-danger btn-icon icon-left" 
                      // onClick={(e)=>{ e.preventDefault();alert('alert'); return false;}}
                      onClick={(e)=>props.handleronAbortClick(e)}>
                      
               <i className="fas fa-times"></i> Cancel Order
              </button>
            </div>
            </div>
           
            </>
          
    )
}

 export default  SaveCancelButtons
