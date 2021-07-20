// import statements
import React from 'react';
import PropTypes from 'prop-types';
import {IS_VIEW_MODE} from '../../constants';
import Loader from 'react-loader-spinner';
import format from 'date-fns/format';
import get from 'lodash/get';
import find from 'lodash/find';
import isUndefined from 'lodash/isUndefined';
import sum from 'lodash/sum';
import map from 'lodash/map';
import {Numeral} from '../General';
import {
	GET_UDL_HANDLER_METHOD_NAME,
	RISK_HANDLER_URL
} from '../../constants';
import {
	getResultFromServer
} from '../../api/apiManager';

// generates a table component
class Table extends React.PureComponent {
	// default state
	state = {
		isLoading: true,
		tableUdlCodes: [],
		tableUdls: []
	};

	// retrieves all the UDL lists for the table (if applicable)
	getAllUdlValues = async () => {
		// initialise variables
		let udlCodeLists = [];

		// get distinct udl codes
		this.props.columnHeaders.map((columnHeader) => {
			// check if there are any udl values
			if (columnHeader.isUdlMapping) {
				// ensure the udl hasn't already been added
				if (!udlCodeLists.includes(columnHeader)) {
					// add udl list code
					udlCodeLists.push(columnHeader.udlCode);
				}
			}
		});

		// set state
		this.setState({
			tableUdlCodes: udlCodeLists
		});

		// loop through column headers
		if (udlCodeLists.length === 0) {
			return Promise.resolve([]);
		}
		else {
			return await Promise.all(udlCodeLists.map((udlCode) => {
				// retrieve the UDL value
				return this.getUdlValue(udlCode);
			}));
		}
	}

	// process logic on component mounting
	componentDidMount() {
		// retrieve all udl values
		this.getAllUdlValues()
			.then((udlResult) => {
				// initialise variables
				let udlValues = [];

				// loop through values
				this.state.tableUdlCodes.map((udl, index) => {
					udlValues.push({
						udlListCode: udl,
						udlListValues: udlResult[index]
					});
				});

				// set state
				this.setState({
					isLoading: false,
					tableUdls: udlValues
				});
			});
	}

	// retrieves the relevant URL
	getUdlValue = async (udlListName) => {
		// declare parameters for api call
		const handlerParams = {
			'operation': GET_UDL_HANDLER_METHOD_NAME,
			'udlListName': udlListName,
			'udlListType': 'pmlookup'
		};

		// retrieve UDL list from server
		const response = await getResultFromServer(RISK_HANDLER_URL, handlerParams);

		// return list
		return response;
	};

	// derives the relevant cell value
	getCellValue = (row, column) => {
		// if column is currency
		if (column.isCurrency) {
			return Numeral(get(row, column.dataField, '0')).formatCurrency({mantissa: column.numDecimals, thousandSeparated: true});
		}
		// if column is percentage
		else if (column.isPercentage) {
			return `${Numeral(get(row, column.dataField, '0')).format({mantissa: column.numDecimals, thousandSeparated: true})} %`;
		}
		// if column is udl
		else if (column.isUdlMapping) {
			// retrieve udl list
			const udlList = find(this.state.tableUdls, (tu) => tu.udlListCode === column.udlCode).udlListValues;
			const udlValue = find(udlList, (udl) => {
				return udl.Code === get(row, column.dataField, '')
			});

			// return the relevant udl value
			return udlValue === '' || isUndefined(udlValue) ? '' : udlValue.Description;
		}
		// if column is date
		else if (column.isDate) {
			return format(new Date(get(row, column.dataField, new Date())), 'yyyy-MM-dd');
		}
		// else
		else
			return get(row, column.dataField, '');
	}

	// formats the relevant total value
	getTotalCellValue = (column, value) => {
		// if column is currency
		if (column.isCurrency) {
			return Numeral(value).formatCurrency({mantissa: column.numDecimals, thousandSeparated: true});
		}
		// if column is percentage
		else if (column.isPercentage) {
			return `${Numeral(value).format({mantissa: column.numDecimals, thousandSeparated: true})} %`;
		}
		// else
		else {
			return `${Numeral(value).format({mantissa: column.numDecimals, thousandSeparated: true})}`;
		}
	}

	// retrieve the total column span
	getTotalColSpan = () => {
		let totalColSpanValue = this.props.columnHeaders.length;

		if (this.props.addOptionsColumn)
			totalColSpanValue = totalColSpanValue + 1;

		if (this.props.showRunningItemCount)
			totalColSpanValue = totalColSpanValue + 1;

		return totalColSpanValue;
	}

	// render the table component
	render() {
		return (
			<div>
				{
					this.props.isLoading || this.state.isLoading ?
						(
							<div className="card-body center-align">
								<Loader
									type="RevolvingDot"
									color="#574B90"
									height="60"
									width="60"
								/>
							</div>) :
						(
							<div>
								<table className="table table-striped child-table center-align" cellSpacing="0" cellPadding="0" border="0">
									<tbody>
										<tr>
											{this.props.showRunningItemCount ? <th>ID</th> : null}
											{this.props.columnHeaders.map((ch, index) => <th key={index}>{ch.text}</th>)}
											{this.props.addOptionsColumn ? <th>OPTIONS</th> : null}
										</tr>
										{
											this.props.rows.length === 0 ?
												(
													<tr key={-1} className="center-align no-items">
														<td key={-2} colSpan={this.getTotalColSpan()} className="center-align">
															<div>NO ITEMS COULD BE LOADED. PLEASE ADD AN ITEM.</div>
														</td>
													</tr>
												) :
												(
													this.props.rows.map((row, rowIndex) => (
														<tr key={rowIndex} className="center-align row-items">
															{
																this.props.showRunningItemCount ?
																	(
																		<td>
																			{rowIndex + 1}
																		</td>
																	) :
																	null
															}
															{
																this.props.columnHeaders.map((ch, columnIndex) => (
																	<td key={columnIndex} className="center-align">
																		{this.getCellValue(row, ch)}
																	</td>
																))
															}
															{
																this.props.addOptionsColumn ?
																	(
																		<td>
																			{this.props.showEditButton && !IS_VIEW_MODE ? <a className="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="Edit" data-original-title="Edit" onClick={(event) => this.props.handleOnEditClick(event, get(row, 'OI', ''))}><i className="ion ion-edit"></i></a> : ''}
																			{this.props.showDeleteButton && !IS_VIEW_MODE ? <a className="btn btn-danger btn-action mr-1" data-toggle="tooltip" title="Delete" data-original-title="Delete" onClick={(event) => this.props.handleOnDeleteClick(event, get(row, 'OI', ''))}><i className="ion ion-trash-b"></i></a> : ''}
																			{IS_VIEW_MODE ? <a className="btn btn-info btn-action mr-1" data-toggle="tooltip" title="View" data-original-title="View" onClick={(event) => this.props.handleOnViewClick(event, get(row, 'OI', ''))}><i className="ion ion-eye"></i></a> : ''}
																		</td>
																	) :
																	null
															}
														</tr>
													))
												)
										}
										{
											this.props.showTotalsRow ?
												(
													<tr className="center-align">
														{
															this.props.showRunningItemCount ?
																(
																	<th className="center-align"></th>
																) :
																null
														}
														{
															this.props.columnHeaders.map((ch, columnIndex) => (
																<th key={columnIndex} className="center-align">
																	{
																		ch.totalField ?
																			this.getTotalCellValue(ch, sum(map(
																				this.props.rows, (r) => Numeral(get(r, ch.dataField, '0'))
																			))) :
																			' '
																	}
																</th>
															))
														}
														<th className="center-align"></th>
													</tr>
												) :
												null
										}
									</tbody>
								</table>
							</div>
						)
				}
			</div>
		);
	}
}

// component prop type validation
Table.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	columnHeaders: PropTypes.array.isRequired,
	rows: PropTypes.array.isRequired,
	addOptionsColumn: PropTypes.bool.isRequired,
	showEditButton: PropTypes.bool.isRequired,
	handleOnEditClick: PropTypes.func.isRequired,
	showDeleteButton: PropTypes.bool.isRequired,
	handleOnDeleteClick: PropTypes.func.isRequired,
	handleOnViewClick: PropTypes.func.isRequired,
	showTotalsRow: PropTypes.bool.isRequired,
	showRunningItemCount: PropTypes.bool.isRequired
}

// export redux connected component
export default React.memo(Table);