/* eslint-disable no-undef */

// import statements
import React from 'react';
import PropTypes from 'prop-types';

// renders the page header
const PageHeader = ({header}) => {
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

	return (
		<div className='main-content'>
			<section className='section'>
				<div className='row'>
					<div className='col-12 col-sm-12 col-lg-12'>
						<div className='card card-sm'>
							<div className='card-icon'></div>
							<div className='card-wrap'>
								<a href='#' data-toggle='sidebar' className='nav-link nav-link-lg' onClick={processSidebarHideShow}>
									<i className='ion ion-navicon-round'></i>
								</a>
								<div className='card-body header-card'>
									<div className='center-align title-text'>
										<h6>
											<a id='pageHeaderClient' href={hyperlinkPath} style={{fontSize: '10px', color: 'white'}} data-toggle='tooltip' title={fullClientName} data-original-title={fullClientName}>{shortClientName}</a> - {header} - <label style={{fontSize: '10px'}}>{policyNumber}</label>
										</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
};

// prop type validation
PageHeader.propTypes = {
	header: PropTypes.string.isRequired
}

// export the component
export default React.memo(PageHeader);