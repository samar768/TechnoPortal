// import statements
import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

// page loader
const PageLoader = (props) => (
	<Loader
		type={props.loaderType || 'Ball-Triangle'}
		color={props.loaderColor || '#574B90'}
		height={props.loaderHeight || '50'}
		width={props.loaderWidth || '50'}
	/>
);

// prop types for card
PageLoader.propTypes = {
	loaderType: PropTypes.string,
	loaderColor: PropTypes.string,
	loaderHeight: PropTypes.string,
	loaderWidth: PropTypes.string
};

export default React.memo(PageLoader);