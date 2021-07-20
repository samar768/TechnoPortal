// exclude linting rule
/* eslint-disable no-undef */

// import statements
import React from 'react';
import PropTypes from 'prop-types';
import {IS_VIEW_MODE} from '../../constants';
import {IonIcon} from '../General';

// generates a modal component
class FileCsvUploadModal extends React.PureComponent {
	state = {
		modalWarningFooterTextArray: [],
		rows: []
	};

	// process logic on component mount
	componentDidMount() {
		// append modal to body
		$('#fileUploadModalId').appendTo('body');
	}

	// remove modal from body on component unmount
	componentWillUnmount() {
		$('#fileUploadModalId').remove();
	}

	// handles modal close functionality
	handleOnClose = () => {
		$('#fileUploadModalId').modal('hide');

		// update state
		this.setState({
			modalWarningFooterTextArray: [],
			rows: []
		});

		// execute relevant functionality on close
		this.props.handleOnCloseClick();
	}

	// handles model open functionality
	handleOnOpen = () => {
		// show modal
		$('#fileUploadModalId').modal('show');

		// execute relevant functionality on open
		this.props.handleOpenModalClick();
	}

	// handles the file upload control click
	openFileSearchWindow = () => {
		// reset the state
		this.setState({
			modalWarningFooterTextArray: [],
			rows: []
		});

		document.getElementById('fileinput').value = null;
		document.getElementById('fileinput').click();
	}

	// process the csf file
	processCsvFile = (e) => {
		// declare variables
		var f = e.target.files[0];
		let csvRows = [];
		let warningArray = [];
		const self = this;

		// validate file
		try {
			if (f) {
				var r = new FileReader();

				// read data
				r.onload = function (e) {
					var contents = e.target.result;
					var lines = contents.split('\n');

					// loop through csv file
					for (var i = 1; i < lines.length; i++) {
						let rowData = lines[i].split(',');

						// validate row and column length
						if (rowData.length !== self.props.csvColumnNames.length) {
							// add warning message
							warningArray.push('CSV Import Failed - Please ensure the column and row lengths are equal.');
						}
						else {
							// push data
							csvRows.push(rowData);
						}
					}

					// update state
					self.setState({
						modalWarningFooterTextArray: Array.from(new Set(warningArray)),
						rows: warningArray.length > 0 ? [] : csvRows
					});
				}

				// validate file format
				if (f.name.includes('.csv')) {
					// read file
					r.readAsText(f);
				}
				else {
					// add warning message
					warningArray.push('CSV Import Failed - Please ensure the file format is csv.');

					// get rows from state
					const stateRows = this.state.rows;

					// update state
					this.setState({
						modalWarningFooterTextArray: warningArray,
						rows: warningArray.length > 0 ? [] : stateRows
					});
				}
			}
			else {
				// add warning message
				warningArray.push('CSV Import Failed - Please ensure the file is correctly formatted.');

				// get rows from state
				const stateRows = this.state.rows;

				// update state
				this.setState({
					modalWarningFooterTextArray: warningArray,
					rows: warningArray.length > 0 ? [] : stateRows
				});
			}
		}
		catch (e) {
			// add warning message
			warningArray.push('CSV Import Failed - Please ensure the file is correctly formatted.');

			// get rows from state
			const stateRows = this.state.rows;

			// update state
			this.setState({
				modalWarningFooterTextArray: warningArray,
				rows: warningArray.length > 0 ? [] : stateRows
			});
		}
	}

	// render the component
	render() {
		// determine if the modal should be open or closed
		if (this.props.openModal) {
			// show modal
			$('#fileUploadModalId').modal('show');
		}
		else {
			// hide modal
			$('#fileUploadModalId').modal('hide');
		}

		return (
			<div className="form-group col-6 col-sm-6 col-md-6 col-lg-4">
				<div>
					<div className="row">
						{!IS_VIEW_MODE && !this.props.isLoading ? <a href="#" className="btn btn-info btn-add-item mr-1" onClick={this.handleOnOpen}><i className="ion ion-upload"></i> UPLOAD CSV FILE</a> : ''}
					</div>
					<div className="modal fade" tabIndex="-1" id="fileUploadModalId" role="dialog">
						<div className="modal-dialog modal-dialog-centered modal-lg risk-screen" role="document">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id="exampleModalLabel">Upload CSV File</h5>
									<button type="button" className="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div className="modal-body">
									<React.Fragment>
										<p>
											<input
												type='file'
												id='fileinput'
												className='btn btn-primary'
												style={{display: 'none'}}
												onChange={(e) => this.processCsvFile(e)}
												accept=".csv"
											/>
											<a
												href='#'
												className='btn btn-info btn-add-item'
												onClick={() => {
													this.openFileSearchWindow();
												}}>
												<i className='ion ion-upload'></i> UPLOAD FILE
											</a>
										</p>
										<br />
										<React.Fragment>
											{this.state.rows.length === 0 ?
												'' :
												(
													<div>
														<table className="table table-striped child-table center-align" cellSpacing="0" cellPadding="0" border="0">
															<tbody>
																<tr>
																	{
																		this.props.csvColumnNames.map((h, index) => (<th key={index}>{h}</th>))
																	}
																</tr>
																{
																	this.state.rows.map((row, index) => (
																		<tr key={index} className="center-align row-items">
																			{
																				row.map((r, index2) => (
																					<td key={index2} className="center-align">
																						{r}
																					</td>
																				))
																			}
																		</tr>
																	))
																}
															</tbody>
														</table>
													</div>
												)
											}
										</React.Fragment>
									</React.Fragment>
								</div>
								{this.state.modalWarningFooterTextArray.length > 0 ?
									(
										<div className="modal-footer">
											<div className="modal-warning-footer">
												{
													this.state.modalWarningFooterTextArray || [] ?
														this.state.modalWarningFooterTextArray.map((modalFooterText, index) => {
															return <p key={index}><IonIcon iconClass="ion ion-information-circled warning-icon" />{modalFooterText}</p>
														}) :
														''
												}
											</div>
										</div>
									) : ''
								}
								<div className="modal-footer">
									<a href="#" className="btn btn-secondary btn-add-item" onClick={this.handleOnClose}>CLOSE</a>
									{!IS_VIEW_MODE ? <a href="#" className="btn btn-primary btn-add-item" onClick={() => this.props.handleOnImportClick(this.state.rows)}>UPLOAD</a> : ''}
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
FileCsvUploadModal.propTypes = {
	csvColumnNames: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired,
	handleOpenModalClick: PropTypes.func.isRequired,
	handleOnImportClick: PropTypes.func.isRequired,
	handleOnCloseClick: PropTypes.func.isRequired,
	openModal: PropTypes.bool.isRequired
};

// expoer modal component
export default React.memo(FileCsvUploadModal);