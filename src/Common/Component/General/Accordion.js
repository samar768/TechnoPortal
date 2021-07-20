// import statements
import React from 'react';
import PropTypes from 'prop-types';

// main card container
const Accordion = (props) => {
	return (
		<React.Fragment>
			{
				props.accordionItems.map((ai, index) => {
					return (
						<div key={index} className="accordion">
							<div className="accordion-header" data-toggle="collapse" data-target={`#panel-body-${index}`} aria-expanded="true">
								<h4>{`${ai.Header}`}</h4>
							</div>
							<div className={`accordion-body collapse ${index === 0 ? 'show' : ''}`} id={`panel-body-${index}`} data-parent="#accordion">
								<React.Fragment>
									<h6>Error Messages:</h6>
									{
										ai.ErrorMessages.map((em, index1) => {
											return (
												<React.Fragment key={`Error_${ai.Header}_${index1}`}>
													<label>{em}</label><br />
												</React.Fragment>
											);
										})
									}
									<h6>Success Messages:</h6>
									{
										ai.SuccessMessages.map((em, index2) => {
											return (
												<React.Fragment key={`Success_${ai.Header}_${index2}`}>
													<label>{em}</label><br />
												</React.Fragment>
											);
										})
									}
								</React.Fragment>
							</div>
						</div>
					)
				})
			}
		</React.Fragment>
	)
};

// prop types for card
Accordion.propTypes = {
	accordionItems: PropTypes.array.isRequired
};

// export card component
export default React.memo(Accordion);


// NOTE: the accordionItems prop should be structured as follows:
//[
//	{
//		Header: '',
//		ErrorMessages: [],
//		SuccessMessages: []
//	},
//	{
//		Header: '',
//		ErrorMessages: [],
//		SuccessMessages: []
//	}
//]