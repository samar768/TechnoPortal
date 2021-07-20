
// import statements
import React from 'react';
import PropTypes from 'prop-types';
import IonIcon from './IonIcon';

// card header container
const CardFooter = (props) => (
	<React.Fragment>
		{props.showCardFooter || false ?
			(<div className="card-footer">
				{props.cardFooterTextArray || [] ?
					props.cardFooterTextArray.map((cardFooterText, index) => {
						return <p key={index}><IonIcon iconClass="ion ion-alert-circled error-icon" />{cardFooterText}</p>
					}) :
					''}
			</div>) : ''
		}
		{props.showWarningCardFooter || false ?
			(<div className="card-warning-footer">
				{props.cardWarningFooterTextArray || [] ?
					props.cardWarningFooterTextArray.map((cardFooterText, index) => {
						return <p key={index}><IonIcon iconClass="ion ion-information-circled warning-icon" />{cardFooterText}</p>
					}) :
					''}
			</div>) : ''
		}
	</React.Fragment>
)

// prop types for card
CardFooter.propTypes = {
	showCardFooter: PropTypes.bool,
	cardFooterTextArray: PropTypes.array,
	showWarningCardFooter: PropTypes.bool,
	cardWarningFooterTextArray: PropTypes.array
};

export default React.memo(CardFooter);