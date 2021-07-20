// import statements
import React from 'react';
import PropTypes from 'prop-types';
import {
	IS_VIEW_MODE
} from '../../constants';

// custom checkbox
const Checkbox = (props) => (
	<div className={props.checkboxSizes.join(' ')}>
		<div className="custom-control custom-checkbox">
			<input type="checkbox" name={props.checkboxId} className="custom-control-input" id={props.checkboxId} onChange={props.handleOnChange} checked={props.checked} disabled={IS_VIEW_MODE || props.isDisabled || false} />
			<label className="custom-control-label" htmlFor={props.checkboxId}>{props.labelDescription}</label>
		</div>
	</div>
)

// prop types for card
Checkbox.propTypes = {
	checkboxId: PropTypes.string.isRequired,
	labelDescription: PropTypes.string.isRequired,
	checkboxSizes: PropTypes.array.isRequired,
	handleOnChange: PropTypes.func.isRequired,
	checked: PropTypes.bool.isRequired,
	isDisabled: PropTypes.bool
};

// export checkbox
export default React.memo(Checkbox);