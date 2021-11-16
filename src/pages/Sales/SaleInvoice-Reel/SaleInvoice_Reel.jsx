
// export default connect(mapStateToProps, mapDispatchToProps)(SaleInvoice_Reel)
 import React,{useState, useEffect} from 'react'



const SaleInvoice_Reel = () => {

  const [counter,setCounter] =useState(0);
  
  useEffect(()=>
    {
   
      setCounter(prevState => {
        // Object.assign would also work
        return prevState+1;
      });
      console.log(`hi i am being called ${counter}`);
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



  return (
   <>
   Hi there
   </>
     
  );
};

export default SaleInvoice_Reel