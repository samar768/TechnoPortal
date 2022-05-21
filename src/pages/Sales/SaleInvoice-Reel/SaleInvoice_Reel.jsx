
// export default connect(mapStateToProps, mapDispatchToProps)(SaleInvoice_Reel)
 import React,{useState, useEffect} from 'react'
 import clone from 'lodash/clone';
 import set from 'lodash/set';
 import replace from 'lodash/replace';
 import { Card 
} from '../../../Common/Component/General/';
import  CustomGridControl from '../../../Common/Component/EditableItemGrid/CustomGridControl.js';
import {ORDER_TABLE} from './Constants';
import {handleonAdd,
        handleonDelete,
        handleonItemsUpdate,
        handleonOrderSubmit
               } from './SaleInvoice.Logic'
import { connect, useDispatch } from 'react-redux';
import {
  addNewItem,
  removeItem,
  updateItem
} from './Redux/saleInvoiceAction';

const SaleInvoice_Reel = (props) => {

  const [counter,setCounter] =useState(0);

  useEffect(()=>
    {
      setCounter(prevState => {
        // Object.assign would also work
        return prevState+1;
      });
    },
   
    []
  );

  useEffect(()=>
  {
    setCounter(2);
    console.log(`hi i am being called ${counter}`);
  },
  []
);
    // processing total extension premium update
    const handleonStateUpdate = (fieldname,fieldValue) => {
      // initialise variables
      let totalFinalExtensionPremium = '0';
      let totalSasriaExtensionSumInsured = '0';
      var controlArray =fieldname.split("__");
      var fieldRowIndex=replace(controlArray[0],"{","");
      var fieldName=replace(controlArray[1],"}","");
      var CurrentitemDetailsState=clone(props.itemDetails, true);
      
      
      set(props.itemDetails[fieldRowIndex], fieldName, fieldValue);

      console.log(`feild index ${fieldRowIndex} and feildname is ${fieldName} And feild Value is ${fieldValue}`);
     // dispatch action
      props.updateItem(props.itemDetails[fieldRowIndex], fieldRowIndex)
     
      };

      const handleOnClick=(event, id)=> {
        switch (event) {
          case 'removeItem': {
            //props.handleItemStateRemove(id);
            break;
          }
          default: {
    
          }
        }
        console.log(`${event} ${id}`);
      }

      const handlerOnAddClick=(event, data, rowIndex)=>{
        props.addNewItem(data,rowIndex);
      }
      const handlerOnRemoveClick=(rowIndex)=>{
        if (props.itemDetails[rowIndex].V_SNO==1) return false;
        props.removeItem(rowIndex);
      }



  return (
    <React.Fragment>
    <div className="main-content">
        <section className="section">
            <div className="row">
                <Card
                    cardSizes={['col-12']}
                    cardColor='card-primary'
                    cardId='Sale Invoice'
                    cardShowHide={true}
                    cardHeaderText='Sale Invoice'
                    animateCard={true}
                    hasRateButton={true}
                    handleOnRateClick={()=>{alert('')}}
                >
                   </Card>
                    </div>
                </section>
    </div>
         
        <CustomGridControl
            id='itemgrid'
            handlerOnAddClick={handlerOnAddClick}
            handleOnDeleteClick={handlerOnRemoveClick}
            title="Items"
            tableSetup={ORDER_TABLE}
            rows={props.itemDetails}
            validationMessages={[]}
            handleUpdateGridItems={handleonStateUpdate}
            isLoading={false}
            controlDataObject={props.itemDetails}
            >
          </CustomGridControl>
           
          </React.Fragment>
     
  );
};
const mapStateToProps = (state, ownProps) => {
	return {
        itemDetails:state.invoiceData.items
  };
}
const mapDispatchToProps = (dispatch) => {
  return{
    addNewItem:(newrow,rowindex)=>{
      dispatch(addNewItem(newrow,rowindex))
    },
    removeItem:(rowIndex)=>{
      dispatch(removeItem(rowIndex))
    },
    updateItem:(updatedRow, rowIndex)=>{
      dispatch(updateItem(updatedRow, rowIndex))
    },
    PersitItems:()=>{

    }
  };

};
export default connect(mapStateToProps,mapDispatchToProps)(SaleInvoice_Reel)