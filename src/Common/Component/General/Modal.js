// exclude linting rule
/* eslint-disable no-undef */

// import statements
import React from 'react';
import PropTypes from 'prop-types';
import {IS_VIEW_MODE} from '../../constants';
import IonIcon from './IonIcon';

// generates a modal component
class Modal extends React.PureComponent {

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

		// execute relevant functionality on close
		this.props.handleOnCloseClick();
	}

	// handles model open functionality
	handleOnOpen = () => {
		// show modal
		$(`#${this.props.modalId}`).modal('show');

		// execute relevant functionality on open
		this.props.handleOpenModalClick();
	}

	// render the component
	render() {
		// determine if the modal should be open or closed
		if (this.props.openModal) {
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
					<div className="row">
						{!IS_VIEW_MODE && !this.props.isLoading ? <a href="#" className="btn btn-primary btn-add-item mr-1" onClick={this.handleOnOpen}>
							<i className="ion ion-plus"></i> {this.props.openModalText}</a> : ''}
					</div>
					<div className="modal fade" tabIndex="-1" id={this.props.modalId} role="dialog">
						<div className="modal-dialog modal-dialog-centered modal-lg risk-screen" role="document">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id="exampleModalLabel">{this.props.headerText}</h5>
									<button type="button" className="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div className="modal-body">
									{this.props.children}
								</div>
								{this.props.showWarningModalFooter || false ?
									(
										<div className="modal-footer">
											<div className="modal-warning-footer">
												{this.props.modalWarningFooterTextArray || [] ?
													this.props.modalWarningFooterTextArray.map((modalFooterText, index) => {
														return <p key={index}><IonIcon iconClass="ion ion-information-circled warning-icon" />{modalFooterText}</p>
													}) :
													''}
											</div>
										</div>
									) : ''
								}
								<div className="modal-footer">
									<a href="#" className="btn btn-secondary btn-add-item" onClick={this.handleOnClose}>CLOSE</a>
									{!IS_VIEW_MODE ? <a href="#" className="btn btn-primary btn-add-item" onClick={this.props.handleOnSaveClick}>SAVE CHANGES</a> : ''}
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
Modal.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	modalId: PropTypes.string.isRequired,
	headerText: PropTypes.string,
	openModalText: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.string
	]).isRequired,
	handleOpenModalClick: PropTypes.func.isRequired,
	hasRateButton: PropTypes.bool.isRequired,
	handleOnRateClick: PropTypes.func,
	handleOnSaveClick: PropTypes.func.isRequired,
	handleOnCloseClick: PropTypes.func.isRequired,
	openModal: PropTypes.bool.isRequired,
	showWarningModalFooter: PropTypes.bool,
	modalWarningFooterTextArray: PropTypes.array
};

// expoer modal component
export default React.memo(Modal);