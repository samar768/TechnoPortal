// import statements
import React from 'react';
import PropTypes from 'prop-types';

// export icon
const FullScreenLoader = ({loadingText}) => (
	<div id="preloader" className="bg-overlay">
		<div id="loader"></div>
		<div className="loader-text row h-100 justify-content-center align-items-center">
			<h6>{loadingText.toUpperCase()}</h6>
		</div>
	</div>
);

// prop types for card
FullScreenLoader.propTypes = {
	loadingText: PropTypes.string.isRequired
};

export default React.memo(FullScreenLoader);