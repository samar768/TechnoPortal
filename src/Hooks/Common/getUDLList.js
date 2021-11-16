// import statements
import {
	useState,
	useEffect
} from 'react';
import PropTypes from 'prop-types'
import {
	GET_UDL_SERVICENAME,
	RISK_HANDLER_URL
} from '../../Common/constants.js';
import {
	getResultFromServer
} from '../../Common/api/apiManager';
import GetStaticListData from '../../StaticData/GetStaticListData'
import convertJSONstringtoObject from '../../Helpers/utilities'
import GetStaticdata from './UDLSTaticData'

// retrieves a udl list from the server
const GetUDLList = (udlListName, udlListType) => {

	let Staticdata=GetStaticdata(udlListName, udlListType);
	// set default state
	const [udl, setUdl] = useState([]);

	const getUdlValue = async (udlListType) => {
		
		// declare parameters for api cally
		switch (udlListType) {
			case 'VOUCHERTYPE': {
				//const response =  GetStaticListData('voucher_types');
				// const handlerParams = {
				// 	'SQLQuery': "Select V_Type As Code,Description from Voucher_Type where Category='SORD'",
				// };
				// // override for Developement Purpose
				// var RISK_HANDLER_URL_Dev='http://localhost:65008/common' ;
				// // retrieve UDL list from server
				// var  apiresponse = await getResultFromRestAPI(RISK_HANDLER_URL_Dev, handlerParams); 

				//  apiresponse=convertJSONstringtoObject(apiresponse);

				//  if (apiresponse!=null)
				//  {
				// 	const responseFinal ={
				// 		"jsonData":apiresponse.jsonString
				// 	 };
				// 	 setUdl(responseFinal);
				//  }
				//  else{
				// 	 const responseFinal ={"jsonData":null};
				// 	 setUdl(responseFinal);
				// }
				
				// return list
			
			//	break;
				
				const response ={
					"jsonData": [
					  {
						"code": "SORD",
						"description": "Sale Order"
					  },
					  {
						"code": "SORDO",
						"description": "Sale Order Other"
					  },
					  {
						"code": "SORDE",
						"description": "Export Order"
					  }
					]};
					
					console.log(Staticdata);
					
				
					setUdl(response);
					break;
			}
			case 'AGAINSTFORM': {

				const response =
				{
				"jsonData":  [
                    {  'code': 'HO1',  'description': 'CST 2 % agt Form C', Tax_Per: 2 },
                    {  'code': 'HO2',  'description': 'CST 5% W/o Form', Tax_Per: 5 },
                    {  'code': 'HO6',  'description': 'Exportable sales', Tax_Per: 0 },
                    {  'code': 'HO5',  'description': 'Form H agt Export', Tax_Per: 0 },
                    {  'code': 'HO17',  'description': 'IGST-SLES', Tax_Per: 12 },
                    {  'code': 'HO18',  'description': 'LGST-SALES', Tax_Per: 6 },
                    {  'code': 'HO7',  'description': 'VAT 0 % agt Home Consumpt', Tax_Per: 0 },
                    {  'code': 'HO4',  'description': 'VAT 2 % agt Form', Tax_Per: 2 },
                    {  'code': 'HO14',  'description': 'VAT 6 % W/o Form', Tax_Per: 6 },
                    {  'code': 'HO3',  'description': 'VAT 5 % W/o Form', Tax_Per: 5 },
                ]
			}
			
				setUdl(response);
				break;
			}

			case 'PARTY': {

				 const response =
				 {
				 "jsonData":  [
                    {
                        'code': 'HO67',
                        'description': 'A.R. ENTERPRISE',
                    }, {
                       'code': 'HO348',
                        'description': 'ABHIJIT PACKAGING',
                      
                    }, {
                        'code': 'HO44',
                        'description': 'ADITYA PACKAGING INDUSTRIES',
                      
                    }, {
                        'code': 'HO47',
                        'description': 'BADITYA PACKAGING INDUSTRIES',
                        
                    },
                    { 
						'code': 'HO323', 
						'description': 'BANGKOR PULP AND PAPER CORPORATIO', 
				      },
                   
                ]
			}

				setUdl(response);
				break;
			}

			case 'ORDERTYPE': {
			
				const response =
				{
				"jsonData":  [
				   {
					   'code': 'S',
					   'description': 'Sheet',
				   }, {
					  'code': 'P',
					   'description': 'Paper',
					 
				   }, {
					   'code': 'O',
					   'description': 'Other',
					 
				   }
			   ]
		   }

			   setUdl(response);
			   break;
			}

			case 'CITY': {
			
				const response =
				{
				"jsonData":  [
				    { 'code': 'HO75', 'description': '24 PGS (NORTH)', State: 'HO36' },
                    { 'code': 'HO12', 'description': '24 Pgs.(S)', State: '' },
                    { 'code': 'HO16', 'description': '9th Mile', State: '' },
                    { 'code': 'HO23', 'description': 'ADHERI EAST', State: 'HO22' },
                    { 'code': 'HO76', 'description': 'Agartala', State: 'HO34' },
                    { 'code': 'HO64', 'description': 'Aligarh', State: '' },
                    { 'code': 'HO40', 'description': 'ALLAHABAD', State: 'HO35' },
                    { 'code': 'HO87', 'description': 'ARAMBAGH', State: 'HO36' },
                    { 'code': 'HO88', 'description': 'ASANSOL', State: 'HO36' },
                    { 'code': 'HO38', 'description': 'AZARA', State: '' },
                    { 'code': 'HO7', 'description': 'Baddi', State: '' },
                    { 'code': 'HO4', 'description': 'BALICHAK', State: 'HO36' },
                    { 'code': 'HO94', 'description': 'BANHOOGHLY', State: 'HO36' },
                    { 'code': 'HO89', 'description': 'BARASAT', State: 'HO36' },
                    { 'code': 'HO97', 'description': 'BELIAGHATA', State: 'HO36' },
                    { 'code': 'HO14', 'description': 'Birbhum', State: 'HO36' },
                    { 'code': 'HO52', 'description': 'Bolagar', State: 'HO36' },
                    { 'code': 'HO45', 'description': 'BORKA ROAD,CHANGSARI', State: '' },
                    { 'code': 'HO42', 'description': 'BURDWAN', State: 'HO36' },
                    { 'code': 'HO79', 'description': 'Cachar', State: 'HO5' },
                    { 'code': 'HO49', 'description': 'Changsari', State: 'HO5' },
                    { 'code': 'HO33', 'description': 'Chayygaon', State: 'HO5' },
			   ]
		   }

			   setUdl(response);
			   break;
			}
			
			default:
				const handlerParams = {
					'MasterType': 0,
					'IsColumnSpecified': "false"
				};
				// override for Developement Purpose
				var RISK_HANDLER_URL_Dev='http://localhost:65008/masters' ;
				// retrieve UDL list from server
				const response = await getResultFromServer(RISK_HANDLER_URL_Dev, handlerParams); 
		
				// return list
				setUdl(response);
				break;
		}

	
	};


	// retrive udl when component loads
	useEffect(() => {
		let unmounted = false;
	
		if (!unmounted) {
			 
			getUdlValue(udlListType);
		} 

		// specify how to clean up after this effect
		return () => {
			unmounted = true;
		};
	}, []);

	// return udl
	return udl;
}

GetUDLList.propTypes={
	udlListName:PropTypes.string.isRequired,
	udlListType:PropTypes.number.isRequired
}
// export getUDLList hook
export default GetUDLList;