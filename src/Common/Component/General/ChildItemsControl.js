// import statements
import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import forEach from 'lodash/forEach';
import clone from 'lodash/clone';
import set from 'lodash/set';
import {
	CardBodyHeader,
	Modal,
	Table
} from './index';

// control for the addition, edition, and deletion of items
class ChildItemsControl extends React.PureComponent {
	// default state
	state = {
		isAddItem: false,
		isOpenModal: false,
		isFileUploadOpenModal: false
	};

	// process component did update functionality
	componentDidUpdate(prevProps) {
		// compare props
		if (this.props.riskObject !== prevProps.riskObject) {
			const childObjectId = get(this.props.riskObject, 'OBJECT_ID', '');
			const currentChildItem = this.props.childItems.find((bi) => bi.OI.replace('OI', '') === childObjectId);

			// update state
			if (!isEmpty(currentChildItem)) {
				this.props.updateActiveItem(currentChildItem);
			}
		}
	}

	// handles on click functionality
	handleAddItem = () => {
		// set state to open modal
		this.setState({
			isAddItem: true,
			isOpenModal: true
		});

		// set active item state
		this.props.updateActiveItem(this.props.defaultItemState || {});
	}


	// handles edit functionality for the modal
	handleEditItem = (event, objectId) => {
		// retrieve the relevant item based on the object id            
		let arrayIndex = -1;

		// loop through all items and aretrieve array index
		map(this.props.childItems, (item, index) => {
			if (get(item, 'OI', '') === objectId.toString()) {
				arrayIndex = index;
			}
		});

		// update the state
		this.setState({
			isAddItem: false,
			isOpenModal: true
		});

		// get active child item
		let activeChildItem = this.props.childItems[arrayIndex];

		// set default state on edited item
		if (this.props.defaultItemState) {
			forEach(this.props.defaultItemState, (value, key) => {
				if (!activeChildItem.hasOwnProperty(key)) {
					activeChildItem[key] = value;
				}
			});
		}

		// set active item state
		this.props.updateActiveItem(activeChildItem);
	};

	// handles edit functionality for the modal
	handleDeleteItem = (event, objectId) => {
		// handles the deletion of items
		if (typeof objectId !== 'undefined' & objectId !== '') {

			// clone current state            
			let clonedActiveItem = clone(this.props.activeItem, true);

			// retrieve the relevant item based on the object id            
			let arrayIndex = -1;

			// loop through all items and aretrieve array index
			map(this.props.childItems, (item, index) => {
				if (get(item, 'OI', '') === objectId.toString()) {
					arrayIndex = index;
				}
			});

			// set cloned vehicle item
			clonedActiveItem = this.props.childItems[arrayIndex];

			// set US values            
			set(clonedActiveItem, 'US', '3');
			set(clonedActiveItem, 'ADD_ITEM', '0');
			set(clonedActiveItem, 'EDIT_ITEM', '0');
			set(clonedActiveItem, 'DELETE_ITEM', '1');

			// call update
			this.props.processPersistChildItem(clonedActiveItem, false);

			// set active item state
			this.props.updateActiveItem(this.props.defaultItemState || {});
		}

		// update state
		this.setState({
			isAddItem: false
		});
	}


	// handles save changes functionality for the modal
	handleSaveItem = () => {
		// update state
		this.setState({
			isAddItem: false,
			isOpenModal: false
		});

		// clone current state
		let clonedActiveItem = clone(this.props.activeItem, true);

		// check if OI property exists to determine if an item is being added or edited
		if (!this.props.activeItem.hasOwnProperty('OI')) {
			// set OI and US values
			set(clonedActiveItem, 'OI', (Math.floor(100000 + Math.random() * 900000)).toString());
			set(clonedActiveItem, 'US', '1');
			set(clonedActiveItem, 'ADD_ITEM', '1');
			set(clonedActiveItem, 'EDIT_ITEM', '0');
			set(clonedActiveItem, 'DELETE_ITEM', '0');

			// call update
			this.props.processPersistChildItem(clonedActiveItem, false);

			// set active item state
			this.props.updateActiveItem(clonedActiveItem);
		}
		else {
			// get US value
			const us = get(clonedActiveItem, 'US', '');

			// set US values 
			if (us !== '1')
				set(clonedActiveItem, 'US', '2');

			set(clonedActiveItem, 'ADD_ITEM', '0');
			set(clonedActiveItem, 'EDIT_ITEM', '1');
			set(clonedActiveItem, 'DELETE_ITEM', '0');

			// call update
			this.props.processPersistChildItem(clonedActiveItem, false);
		}
	}

	// process view only logic
	handleViewItem = (event, objectId) => {
		// retrieve the relevant item based on the object id            
		let arrayIndex = -1;

		// loop through all items and retrieve array index
		map(this.props.childItems, (item, index) => {
			if (get(item, 'OI', '') === objectId.toString()) {
				arrayIndex = index;
			}
		});

		// update the state
		this.setState({
			isAddItem: false,
			isOpenModal: true
		});

		// set active item state
		this.props.updateActiveItem(this.props.childItems[arrayIndex]);
	}

	// handles close item
	handleCloseItem = () => {
		// set state values
		this.setState({
			isOpenModal: false
		});
	}


	// render the main cover selection
	render() {
		// retrieve valid child items        
		let validChildItems = [];

		map(this.props.childItems, (item) => {
			if (get(item, 'US', '') !== '3')
				validChildItems.push(item);
		});

		// render controls
		return (
			<div>
				
				{this.props.tableHeaderText ? <CardBodyHeader headerText={this.props.tableHeaderText} /> : null}
				<Table
					isLoading={this.props.isLoading}
					columnHeaders={this.props.columnHeaders}
					addOptionsColumn={true}
					rows={validChildItems}
					showEditButton={true}
					handleOnEditClick={(event, objectId) => this.handleEditItem(event, objectId)}
					showDeleteButton={true}
					handleOnDeleteClick={(event, objectId) => this.handleDeleteItem(event, objectId)}
					showViewButton={false}
					handleOnViewClick={(event, objectId) => this.handleViewItem(event, objectId)}
					showTotalsRow={validChildItems.length === 0 ? false : true}
					showRunningItemCount={this.props.showRunningItemCount || false}
				/>
				<Modal
					modalId={this.props.modalId}
					headerText={this.props.modalHeaderText}
					isLoading={this.props.isLoading}
					openModalText='ADD ITEM'
					hasRateButton={this.props.hasRateButton || false}
					handleOpenModalClick={this.handleAddItem}
					handleOnRateClick={this.handleRateItem}
					handleOnSaveClick={this.handleSaveItem}
					handleOnCloseClick={this.handleCloseItem}
					openModal={this.state.isOpenModal}
					showWarningModalFooter={this.props.showWarningModalFooter}
					modalWarningFooterTextArray={this.props.modalWarningFooterTextArray}>
					<div>
						{this.props.children}
					</div>
				</Modal>
			</div>
		)
	}
}

// component prop type validation
ChildItemsControl.propTypes = {
	riskObject: PropTypes.object.isRequired,
	childItems: PropTypes.array.isRequired,
	activeItem: PropTypes.object.isRequired,
	processPersistChildItem: PropTypes.func.isRequired,
	updateActiveItem: PropTypes.func.isRequired,
	columnHeaders: PropTypes.array.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.string
	]).isRequired,
	isLoading: PropTypes.bool.isRequired,
	modalId: PropTypes.string.isRequired,
	modalWarningFooterTextArray: PropTypes.array,
	tableHeaderText: PropTypes.string.isRequired,
	modalHeaderText: PropTypes.string.isRequired,
	defaultItemState: PropTypes.object,
	hasRateButton: PropTypes.bool,
	showWarningModalFooter: PropTypes.bool,
	hasCsvUpload: PropTypes.bool,
	csvUploadFields: PropTypes.array,
	csvColumnNames: PropTypes.array,
	showRunningItemCount: PropTypes.bool
}

// export redux connected component
export default ChildItemsControl;