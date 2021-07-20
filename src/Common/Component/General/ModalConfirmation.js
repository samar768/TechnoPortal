// exclude linting rule
/* eslint-disable no-undef */

// import statements
import React from 'react';
import PropTypes from 'prop-types';
import {IonIcon} from '../General/';

// generates a modal component
class ModalConfirmation extends React.PureComponent {

	// process logic on component mount
	componentDidMount() {
		// append modal to body
		$(`#${this.props.modalId}`).appendTo('body');
	}

	// remove modal from body on component unmount
	componentWillUnmount() {
		$(`#${this.props.modalId}`).remove();
	}

	// handles modal close functionality
	handleOnClose = () => {
		$(`#${this.props.modalId}`).modal('hide');

		// execute relevant functionality on open
		this.props.handleOnNoClick();
	}

	// render the component
	render() {
		// determine if the modal should be open or closed
		if (this.props.openModalConfirmation) {
			// show modal
			$(`#${this.props.modalId}`).modal('show');
		}
		else {
			// hide modal
			$(`#${this.props.modalId}`).modal('hide');
		}

		return (
			<div className="form-group col-6 col-sm-6 col-md-6 col-lg-4">
				<div>
					<div className="modal fade" tabIndex="-1" id={this.props.modalId} role="dialog">
						<div className="modal-dialog modal-dialog-centered modal-lg risk-screen" role="document">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id="modalConfirmationLabel">{this.props.headerText}</h5>
									<button type="button" className="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div className="modal-body">
									{this.props.children}
								</div>
								<div className="modal-footer">
									<a href="#" className="btn btn-danger btn-add-item" onClick={this.handleOnClose}><IonIcon iconClass='ion-close' /> No</a>
									<a href="#" className="btn btn-success btn-add-item" onClick={this.props.handleOnYesClick}><IonIcon iconClass='ion-checkmark' /> Yes</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

// prop types for modal
ModalConfirmation.propTypes = {
	modalId: PropTypes.string.isRequired,
	headerText: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.string
	]).isRequired,
	openModalConfirmation: PropTypes.bool.isRequired,
	handleOnYesClick: PropTypes.func.isRequired,
	handleOnNoClick: PropTypes.func.isRequired
};

// expoer modal component
export default React.memo(ModalConfirmation);