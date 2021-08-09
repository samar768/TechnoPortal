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
	getResultFromRestAPI
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
					
				
					setUdl(Staticdata);
					break;
			}
			case 'AGAINSTFORM': {
			
				break;
			}

			case 'PARTYNAME': {
			
				break;
			}

			case 'ORDERTYPE': {
			
				break;
			}

			case 'PLACE': {
			
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
				const response = await getResultFromRestAPI(RISK_HANDLER_URL_Dev, handlerParams); 
		
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