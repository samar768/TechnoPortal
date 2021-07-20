// import statements
import React from 'react';
import PropTypes from 'prop-types';

// export icon
const IonIcon = ({iconClass}) => (
	<i className={`${iconClass}`}></i>
);

// prop types for card
IonIcon.propTypes = {
	iconClass: PropTypes.string.isRequired
};

export default React.memo(IonIcon);