// import statements
import {
	useState,
	useEffect
} from 'react';

// retrieves a udl list from the server
const getSearchableHelp = () => {
	// set default state
	const [listValues, setListValues] = useState([]);

	const getlistValues = async () => {
	
		// retrieve UDL list from server
		const response = 		
		[	
			{
			'code':'HO1',
			'description':'Samar jeet singh',
			'address': 'New Dehli'
			},
			{
			'code':'HO1',
			'description':'Amar jeet singh',
			 'address': 'New Dehli'
			},
			{
			'code':'HO1',
			'description':'Pooja jeet singh',
			'address': 'New Dehli'
		    }
		]
		// return list
		setListValues(response);
	};

	// retrive udl when component loads
	useEffect(() => {
		getlistValues();
	}, []);

	// return udl
	return listValues;
}

// export getVehicleMakes hook
export default getSearchableHelp;