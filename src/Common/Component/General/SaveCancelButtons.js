import React from 'react'
import { copyOwnProps } from 'fullcalendar';



const SaveCancelButtons = (props) => {
    return (
        <>
            <div className="buttons">
            <div className="text-md-right">
              <div className="float-lg-right mb-lg-0 mb-3" ></div>
              <button  className="btn btn-success btn-icon icon-left" 
                      onClick={props.handleronSaveClick}>
                         
              <i className="fas fa-check"></i>Save Order
              </button>
              {/* </button> */}
              <button className="btn btn-danger btn-icon icon-left" 
                      onClick={(e)=>{ e.preventDefault();alert('alert'); return false;}} >
               <i className="fas fa-times"></i> Cancel Order
              </button>
            </div>
            </div>
           
            </>
          
    )
}

 export default  SaveCancelButtons
