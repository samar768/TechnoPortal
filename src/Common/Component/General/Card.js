// import statements
import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';

// main card container
const Card = (props) => (
	<div className={props.cardSizes.join(' ') + `${props.animateCard ? ' animated fadeIn' : ''}`}>
		<div className={`card ${props.cardColor}`}>
			{
				props.hideHeader || false ?
					'' :
					(<CardHeader {...props} />)
			}
			<div className="collapse show" id={props.cardId}>
				{
					props.isLoading ?
						(
							<div className="card-body center-align">
								<Loader
									type="RevolvingDot"
									color="#574B90"
									height="60"
									width="60"
								/>
								<br />
							</div>) :
						(
							<React.Fragment>
								<div className="card-body">
									{props.children}
								</div>
								<CardFooter {...props} />
							</React.Fragment>
						)
				}
			</div>
		</div>
	</div>
);

// prop types for card
Card.propTypes = {
	cardSizes: PropTypes.array.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.string
	]).isRequired,
	cardColor: PropTypes.string.isRequired,
	cardId: PropTypes.string.isRequired,
	hideHeader: PropTypes.bool,
	isLoading: PropTypes.bool,
	animateCard: PropTypes.bool
};

// export card component
export default React.memo(Card);