// import statements
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IonIcon from './IonIcon';

// declare styled component
const CardHeaderStyle = styled.div`
    border-bottom: 2px solid #574B90;
    margin-bottom: 10px;    
`;

const CardHeaderTitle = styled.div`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-family: 'Montserrat';
    line-height: 20px;
`;

// card body header container
const CardBodyHeader = (props) => (
	<CardHeaderStyle>
		{props.headerText ?
			(
				<CardHeaderTitle>
					<IonIcon iconClass='ion-ios-arrow-forward' /> {props.headerText}
				</CardHeaderTitle>
			) :
			''
		}
	</CardHeaderStyle>
)

// prop types for card
CardBodyHeader.propTypes = {
	headerText: PropTypes.string.isRequired
};

// export card header component
export default React.memo(CardBodyHeader);