// import statements
import React from 'react';
import Loader from 'react-loader-spinner';

// page loader component
export default class PageLoader extends React.Component {
	render() {
		return (
			<Loader
				type="ThreeDots"
				color="#574B90"
				height="50"
				width="50"
			/>
		);
	}
}