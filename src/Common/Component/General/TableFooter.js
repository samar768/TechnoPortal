// import statements
import React from 'react';
import PropTypes from 'prop-types';
import IonIcon from './IonIcon';

// card header container
const TableFooter = (props) => (
	props.validationMessages.length > 0 ?
		(
			<div className="table-footer">
				{props.validationMessages || [] ?
					props.validationMessages.map((cardFooterText, index) => {
						return <p key={index}><IonIcon iconClass="ion ion-alert-circled error-icon" />{cardFooterText}</p>
					}) :
					''}
			</div>
		) : ''
)

// prop types for card
TableFooter.propTypes = {
	validationMessages: PropTypes.array
};

export default React.memo(TableFooter);