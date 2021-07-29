import React from 'react'

const SaveCancelButtons = (props) => {
    return (
        <>
            <div className="buttons">
            <div className="text-md-right">
              <div className="float-lg-right mb-lg-0 mb-3"></div>
              <button type='submit' className="btn btn-success btn-icon icon-left">
              <i className="fas fa-check"></i>Save Order
              </button>
              <button className="btn btn-danger btn-icon icon-left">
               <i className="fas fa-times"></i> Cancel Order
              </button>
            </div>
            </div>
           
            </>
          
    )
}

 export default  SaveCancelButtons
