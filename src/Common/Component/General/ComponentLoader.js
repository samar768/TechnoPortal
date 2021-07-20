// import statments
import React from 'react';

// loader control
const ComponentLoader = () => {
	// render the UDL
	return (
		<input className='form-control loading' disabled />
	)
}

// export the component loader control
export default React.memo(ComponentLoader);