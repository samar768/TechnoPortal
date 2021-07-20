// import statements
import React from 'react';
import PropTypes from 'prop-types';
import {
	IS_VIEW_MODE
} from '../../constants';

// card header container
const CardHeader = (props) => {
	return (
		<div className="card-header">
			{props.cardShowHide ?
				(<div className="float-right">
					{props.hasAutoRateButton && !IS_VIEW_MODE ?
						(
							<div className="auto-rate-row custom-control custom-switch">
								<input type="checkbox" className="custom-control-input" id={props.autoRateButtonId} onClick={props.handleOnAutoRateClick} defaultChecked={props.isAutoRateButtonChecked} />
								<label className="custom-control-label" htmlFor={props.autoRateButtonId}>Auto-Rate Risk</label>
							</div>
						) : ''
					}
					{props.hasRateButton && !IS_VIEW_MODE ? <a className="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="Rate" data-original-title="Rate" onClick={props.handleOnRateClick || false}><i className="ion ion-calculator"></i></a> : ''}
				</div>) :
				''
			}
			<h4>
				{props.cardHeaderText}
			</h4>
		</div>
	);
}

// prop types for card
CardHeader.propTypes = {
	cardShowHide: PropTypes.bool.isRequired,
	cardHeaderText: PropTypes.string.isRequired,
	hasRateButton: PropTypes.bool,
	handleOnRateClick: PropTypes.func,
	hasAutoRateButton: PropTypes.bool,
	autoRateButtonId: PropTypes.string,
	handleOnAutoRateClick: PropTypes.func,
	isAutoRateButtonChecked: PropTypes.bool
};

export default React.memo(CardHeader);