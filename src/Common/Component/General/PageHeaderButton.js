/* eslint-disable no-undef */

// import statements
import React from 'react';
import PropTypes from 'prop-types';
import ModalConfirmation from './ModalConfirmation';
import {
	IS_VIEW_MODE
} from '../../../Common/constants';

// renders the page header
const PageHeaderButton = (props) => {
	// intialise state	
	const [openConfirmationModal, setOpenConfirmationModal] = React.useState(false);

	// get policy number
	let policyNumber = '';
	if (document.getElementById('ctl00_ClientInfoCtrl_lblPolicyRef') !== null) {
		policyNumber = document.getElementById('ctl00_ClientInfoCtrl_lblPolicyRef').innerHTML;
	}

	// get full name of the client
	let fullClientName = '';
	let hyperlinkPath = '#';
	if (document.getElementById('ctl00_ClientInfoCtrl_hypCompanyName') !== null) {
		fullClientName = document.getElementById('ctl00_ClientInfoCtrl_hypCompanyName').innerHTML;
		hyperlinkPath = document.getElementById('ctl00_ClientInfoCtrl_hypCompanyName').href;
	}

	// get short name of the client
	let shortClientName = '';
	if (document.getElementById('ctl00_ClientInfoCtrl_ltClientCode') !== null) {
		shortClientName = document.getElementById('ctl00_ClientInfoCtrl_ltClientCode').innerHTML;
	}

	// process the hiding and showing of the sidebar
	const processSidebarHideShow = () => {
		var body = $('body');
		var sidebar_nicescroll = $('.main-sidebar').getNiceScroll();

		body.removeClass('search-show search-gone');
		if (body.hasClass('sidebar-gone')) {
			body.removeClass('sidebar-gone');
			body.addClass('sidebar-show');
			sidebar_nicescroll.resize();
		}
		else {
			body.addClass('sidebar-gone');
			body.removeClass('sidebar-show');
			sidebar_nicescroll.resize();
		}
		return false;
	}

	// get invalid sections
	const getInvalidSections = () => {
		// initialise variables
		const parsedInvalidSections = props.invalidSections || [];

		// loop through invalid sections and return invalid sections
		return (
			<ul className="list-unstyled">
				{parsedInvalidSections.map((is, index) => (
					<li key={index}>
						<p><i className="ion ion-chevron-right"></i> {is}</p>
					</li>
				))}
			</ul>
		)
	};

	// persist risk data
	const persistRiskData = () => {
		// persist extensions (if relevant)
		if (props.isProcessExtensions) {
			props.handleUpdateExtensions()
				.then(() => {
					// update risk data
					props.handleOnChange([], true);

					// process finish button functionality
					props.setFinishButtonClicked(true);
				});
		}
		// else persist risk information
		else {
			// update risk data
			props.handleOnChange([], true);

			// process finish button functionality
			props.setFinishButtonClicked(true);
		}
	}

	// process finish button logic
	const handleFinishButtonClick = (event) => {
		// prevent default functionality                           
		event.preventDefault();

		// differentiate between view and non-view mode
		if (IS_VIEW_MODE) {
			// click finish button
			document.getElementById('ctl00_cntMainBody_btnFinish').click();
		}
		else {
			// initialise variables
			const parsedInvalidSections = props.invalidSections || [];
			const allSectionsValid = parsedInvalidSections.length === 0;

			// process finish button functionality 
			if (allSectionsValid) {
				// process modal logic
				setOpenConfirmationModal(false);

				// persist extensions (if relevant)
				persistRiskData();
			}
			else {
				// process modal logic
				setOpenConfirmationModal(true);
			}
		}
	}

	return (
		<React.Fragment>
			<React.Fragment>
				<ModalConfirmation
					modalId='modalConfirmation'
					headerText='Risk Completion Notification'
					openModalConfirmation={openConfirmationModal}
					handleOnNoClick={() => {
						// process finish logic
						setOpenConfirmationModal(false);

						// process finish button functionality
						props.setFinishButtonClicked(false);
					}}
					handleOnYesClick={() => {
						// process finish logic
						setOpenConfirmationModal(false);

						// process finish button functionality
						persistRiskData();
					}}>
					<div>
						<p>The following sections have outstanding errors - please confirm if you would like to proceed:</p>
						<br />
						<div>
							{getInvalidSections()}
						</div>
					</div>
				</ModalConfirmation>
			</React.Fragment>
			<React.Fragment>
				<div className='main-content'>
					<section className='section'>
						<div className='row'>
							<div className='col-10 col-sm-10 col-lg-10'>
								<div className='card card-sm'>
									<div className='card-icon'></div>
									<div className='card-wrap'>
										{props.hideHamburgerMenu ? '' :
											<a href='#' data-toggle='sidebar' className='nav-link nav-link-lg' onClick={processSidebarHideShow}>
												<i className='ion ion-navicon-round'></i>
											</a>
										}
										<div className='card-body header-card'>
											<div className='center-align title-text'>
												<h6>
													<a id='pageHeaderClient' href={hyperlinkPath} style={{fontSize: '10px', color: 'white'}} data-toggle='tooltip' title={fullClientName} data-original-title={fullClientName}>{shortClientName}</a> - {props.header.toUpperCase()} - <label style={{fontSize: '10px'}}>{policyNumber}</label>
												</h6>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='col-2 col-sm-2 col-lg-2'>
								<div className='card card-sm'>
									<div className='card-icon'></div>
									<div className='card-wrap'>
										<div className='card-body header-card'>
											<div className='center-align'>
												<h6>
													<a
														href="#"
														className={'finishButtonHeader btn btn-primary has-icon has-icon-nofloat btn-block'}
														onClick={handleFinishButtonClick}
													>
														<i className="ion ion-flag"></i> <div>FINISH</div>
													</a>
												</h6>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</React.Fragment>
		</React.Fragment>
	)
};

// prop type validation
PageHeaderButton.propTypes = {
	handleOnChange: PropTypes.func.isRequired,
	handleUpdateExtensions: PropTypes.func.isRequired,
	header: PropTypes.string.isRequired,
	hideHamburgerMenu: PropTypes.bool,
	invalidSections: PropTypes.array,
	isProcessExtensions: PropTypes.bool.isRequired,
	setFinishButtonClicked: PropTypes.func.isRequired
}

// export the component
export default React.memo(PageHeaderButton);