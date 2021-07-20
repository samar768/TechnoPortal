// import statements
import {
	useState,
	useEffect
} from 'react';
import {
	GET_UDL_SERVICENAME,
	RISK_HANDLER_URL
} from '../../Common/constants.js';
import {
	getResultFromRestAPI
} from '../../Common/api/apiManager';

// retrieves a udl list from the server
const GetUDLList = ({masterName, masterType}) => {
	// set default state
	const [udl, setUdl] = useState([]);

	const getUdlValue = async (masterType) => {
		// declare parameters for api cally

		const handlerParams = {
			'MasterType': masterType,
			'IsColumnSpecified': "false"
		};
		// override for Developement Purpose
		var RISK_HANDLER_URL_Dev='http://localhost:65008/masters' ;
		// retrieve UDL list from server
		const response = await getResultFromRestAPI(RISK_HANDLER_URL_Dev, handlerParams); 

		// return list
		setUdl(response);
	};

	// retrive udl when component loads
	useEffect(() => {
		let unmounted = false;

		if (!unmounted) {
			getUdlValue(masterType);
		} 

		// specify how to clean up after this effect
		return () => {
			unmounted = true;
		};
	}, []);

	// return udl
	return udl;
}

// getUDLList.propTypes={
// 	masterName:PropTypes.string.isRequired,
// 	masterType:PropTypes.number.isRequired
// }
// export getUDLList hook
export default GetUDLList;