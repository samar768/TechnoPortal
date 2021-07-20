// exclude linting rule
/* eslint-disable no-undef */

// import statements
import React from 'react';
import PropTypes from 'prop-types';

// generates a modal component
class ModalAlert extends React.PureComponent {

	// process logic on component mount
	componentDidMount() {
		// append modal to body
		$(`#${this.props.modalId}`).appendTo('body');

		// show modal
		if (this.props.openModalAlert)
			$(`#${this.props.modalId}`).modal('show');
	}

	// remove modal from body on component unmount
	componentWillUnmount() {
		$(`#${this.props.modalId}`).remove();
	}

	// handles modal close functionality
	handleOnClose = () => {
		$(`#${this.props.modalId}`).modal('hide');
	}

	// render the component
	render() {
		return (
			<div className="form-group col-6 col-sm-6 col-md-6 col-lg-4">
				<div>
					<div className="modal fade" tabIndex="-1" id={this.props.modalId} role="dialog">
						<div className="modal-dialog modal-dialog-centered modal-lg risk-screen" role="document">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id="exampleModalAlertLabel">{this.props.headerText}</h5>
									<button type="button" className="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div className="modal-body">
									<p>{this.props.bodyText}</p>
								</div>
								<div className="modal-footer">
									<a href="#" className="btn btn-secondary btn-add-item" onClick={this.handleOnClose}>OK</a>
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
ModalAlert.propTypes = {
	modalId: PropTypes.string.isRequired,
	headerText: PropTypes.string,
	bodyText: PropTypes.string,
	openModalAlert: PropTypes.bool.isRequired
};

// expoer modal component
export default React.memo(ModalAlert);