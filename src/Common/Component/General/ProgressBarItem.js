// import statements
import React from 'react';
import PropTypes from 'prop-types';
import {
	useState
} from 'react';

// derives the relevant class based on the status
const getProgressBarStatus = (isValid, isRequired, isDisabled) => {
	// initialise class name
	let progressBarClassName = '';

	// verify if disabled    
	if (isDisabled) {
		progressBarClassName = 'disabled-progress';
	}
	// verify if not disabled and not required
	else if (!isDisabled && !isRequired) {
		progressBarClassName = 'not-required-progress';
	}
	// verify if not disabled and required and the progress is valid
	else if (!isDisabled && isRequired && isValid) {
		progressBarClassName = 'valid-progress';
	}
	// verify if not disabled and required and the progress is invalid
	else if (!isDisabled && isRequired && !isValid) {
		progressBarClassName = 'invalid-progress';
	}

	// return class name
	return progressBarClassName;
}

// renders a progress bar item
const ProgressBarItem = (props) => {
	// manage hovered state with hooks
	const [hovered, setHovered] = useState(false);
	const toggleHover = () => setHovered(!hovered);

	// render the control
	return (
		<div className={props.classNames.join(' ')}>
			<div
				className={`${hovered ? 'animate__animated animate__jello' : ''} card-icon progress-icon ${getProgressBarStatus(props.isValid, props.isRequired, props.isDisabled)}`}
				onClick={() => (props.isDisabled === false) ? props.handleOnClick(props.itemCode) : null}
				onMouseEnter={toggleHover}
				onMouseLeave={toggleHover}
			>
				<i className="ion">{props.itemNumber}</i>
			</div>
			{props.description == '' ?
				'' :
				<div className="mt-4 font-weight-bold progess-icon-text">{props.description}</div>
			}
		</div>
	)
}

// prop types for progress bar item
ProgressBarItem.propTypes = {
	classNames: PropTypes.array.isRequired,
	itemCode: PropTypes.string.isRequired,
	itemNumber: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	isRequired: PropTypes.bool.isRequired,
	isValid: PropTypes.bool.isRequired,
	isDisabled: PropTypes.bool.isRequired,
	handleOnClick: PropTypes.func.isRequired
};

// export progress bar item
export default React.memo(ProgressBarItem);