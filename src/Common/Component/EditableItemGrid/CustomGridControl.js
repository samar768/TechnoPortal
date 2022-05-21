// exclude linting rule
/* eslint-disable no-undef */

// import node modules
import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import find from "lodash/find";
import isNull from "lodash/isNull";
import isUndefined from "lodash/isUndefined";
import isEmpty from "lodash/isEmpty";
import Numeral from "../General/Numeral";
import _ from "lodash";
import {
  Card,
  Checkbox,
  NumericFormatter,
  UDLSelect,
  TextInput,
} from "../General/";

// formats the currency and percentage fields in the extensions grid
const CustomGridControl = (props) => {
  const itemMapToControl = (details, controlValue, id, rowIndex) => {
    var idWithIndex = `{${rowIndex}__${id}}`;
    switch (details.type) {
      case "text": {
        return (
          <TextInput
            key={idWithIndex}
            inputId={idWithIndex}
            labelDescription=""
            // inputSizes={[`${details.inputSizes}`]}
            inputSizes={[]}
            isDisabled={false}
            isMandatory={false}
            value={get(props.controlDataObject[rowIndex], id, "")}
            isValid={true}
            validationMessage=""
            handleOnChange={(event) => {
              props.handleUpdateGridItems(idWithIndex, event.target.value);
            }}
            rowIndex={rowIndex}
          />
        );
      }
      case "button": {
        return (
          //   <button size='tiny' onClick={() => props.handleOnClick(details.event, id)}>{details.title}</button>
          <>
            {details.event === "addItem" ? (
              <a
                className="btn btn-primary btn-action mr-1"
                data-toggle="tooltip"
                title={details.title}
                data-original-title="Add"
                onClick={(event) =>
                  props.handlerOnAddClick(event, controlValue, rowIndex)
                }
              >
                <i className="ion ion-android-add-circle"></i>
              </a>
            ) : (
              ""
            )}

            <ion-icon name="add-circle-outline"></ion-icon>
            {details.event === "removeItem" ? (
              <a
                className="btn btn-danger btn-action mr-1"
                data-toggle="tooltip"
                title={details.title}
                data-original-title="Delete"
                onClick={(event) => props.handleOnDeleteClick(rowIndex)}
              >
                <i className="ion ion-trash-b"></i>
              </a>
            ) : (
              ""
            )}
          </>
        );
      }
      default: {
        return "";
      }
    }
  };

  const rows = () => {
    return _.map(props.rows, function(row, rowIndex) {
      var values = _.map(props.tableSetup.columns, function(colName, colKey) {
        var details = props.tableSetup[colName];
        var feildValue = "";
        if (typeof props.controlDataObject != "undefined") {
          feildValue = get(props.controlDataObject, colName, "");
        }

        return colName != "addbtn" && colName != "delbtn" ? (
          <td
            key={`${props.id}-tr${rowIndex}-td${colName}`}
            data-label={details.type === "text" ? details.title : ""}
            className={`form-group center-align ${details.class}`}
          >
            {itemMapToControl(details, feildValue, colName, rowIndex)}
          </td>
        ) : (
          ""
        );
      });
      return (
        <tr
          key={`${props.id}-tr${rowIndex}`}
          className="form-group center-align row-item"
        >
          {values}
          <a
            className="btn btn-primary btn-action mr-1"
            data-toggle="tooltip"
            title="add"
            data-original-title="Add"
            onClick={(event) => props.handlerOnAddClick(event, "", rowIndex)}
          >
            <i className="ion ion-android-add-circle"></i>
          </a>
          <ion-icon name="add-circle-outline"></ion-icon>
          <a
            className="btn btn-danger btn-action mr-1"
            data-toggle="tooltip"
            title=""
            data-original-title="Delete"
            onClick={(event) => props.handleOnDeleteClick(rowIndex)}
          >
            <i className="ion ion-trash-b"></i>
          </a>
        </tr>
      );
    });
  };
  const header = () => {
    var columns = _.map(props.tableSetup.columns, function(colName) {
      var details = props.tableSetup[colName];

      return colName != "addbtn" && colName != "delbtn" ? (
        <th
          key={`${props.id}-tr0-td${colName}`}
          className={`form-group ${details.class}`}
        >
          {details.type === "text" ? details.title : ""}
        </th>
      ) : (
        ""
      );
    });

    return (
      <tr className="form-group" key={`${props.id}-tr0`}>
        {columns}
        <th>Actions</th>
      </tr>
    );
  };

  // // // process logic on mounting of component
  // componentDidMount() {
  // 	// initialise the exensions
  // 	props.initialiseExtensions();
  // }

  // processes the relevant field to display on the extensions control
  // deriveExtensionField = (field, isExtensionChecked, extensionIndex, fieldIndex) => {
  // 	// check to ensure the extension is not to be hidden
  // 	if (!props.hiddenExtensionFields.includes(field.FieldName)) {
  // 		// validate if this is a currency field to display
  // 		if (field.FieldIsCurrency) {
  // 			// process checked/unchecked functionality
  // 			if (!isExtensionChecked) {
  // 				return <TextInput
  // 					inputId={field.FieldName}
  // 					labelDescription=''
  // 					inputSizes={['col-12']}
  // 					isDisabled={true}
  // 					isMandatory={false}
  // 					value=''
  // 					isValid={true}
  // 					validationMessage=''
  // 					handleOnChange={() => false}
  // 				/>;
  // 			}
  // 			else {
  // 				return <NumericFormatter
  // 					inputId={field.FieldName}
  // 					labelDescription=''
  // 					inputSizes={['col-12']}
  // 					numDecimals={field.FieldNumDecimals}
  // 					defaultValue={field.FieldValue}
  // 					value={field.FieldValue}
  // 					handleOnNumericChange={(event) => {
  // 						props.handleUpdateExtensions(extensionIndex, fieldIndex, event.target.value);
  // 					}}
  // 					isDisabled={
  // 						!isExtensionChecked ||
  // 						((props.disablePremiumField ?? true) && (!field.FieldDescription.includes('Posting') && field.FieldName.includes('PREMIUM_'))) ||
  // 						props.disableExtensionFields.includes(field.FieldName) ||
  // 						props.isLoading
  // 					}
  // 					prefix='R '
  // 					suffix=''
  // 					allowNegative={false}
  // 					isMandatory={field.FieldRequired}
  // 					validationMessage=''
  // 					isValid={true}
  // 					isLoading={props.isLoading && field.FieldName.includes('PREMIUM_')}
  // 				/>;
  // 			}
  // 		}

  // 		// validate if this is a percentage field to display
  // 		if (field.FieldIsPercentage) {
  // 			// process checked/unchecked functionality
  // 			if (!isExtensionChecked) {
  // 				return <TextInput
  // 					inputId={field.FieldName}
  // 					labelDescription=''
  // 					inputSizes={['col-12']}
  // 					isDisabled={true}
  // 					isMandatory={false}
  // 					value=''
  // 					isValid={true}
  // 					validationMessage=''
  // 					handleOnChange={() => false}
  // 				/>;
  // 			}
  // 			else {
  // 				return <NumericFormatter
  // 					inputId={field.FieldName}
  // 					labelDescription=''
  // 					inputSizes={['col-12']}
  // 					numDecimals={field.FieldNumDecimals}
  // 					defaultValue={field.FieldValue}
  // 					value={field.FieldValue}
  // 					handleOnNumericChange={(event) => {
  // 						props.handleUpdateExtensions(extensionIndex, fieldIndex, event.target.value !== '' ? (Numeral.unformat(event.target.value) * 100) : '0');
  // 					}}
  // 					isDisabled={!isExtensionChecked || props.disableExtensionFields.includes(field.FieldName) || props.isLoading}
  // 					prefix=''
  // 					suffix=' %'
  // 					allowNegative={false}
  // 					isMandatory={field.FieldRequired}
  // 					validationMessage=''
  // 					isValid={true}
  // 				/>;
  // 			}
  // 		}

  // 		// validate if this is a lookup field to display
  // 		if (field.FieldListType === 'PMLookup') {
  // 			// process checked/unchecked functionality
  // 			if (!isExtensionChecked) {
  // 				return <TextInput
  // 					inputId={field.FieldName}
  // 					labelDescription=''
  // 					inputSizes={['col-12']}
  // 					isDisabled={true}
  // 					isMandatory={false}
  // 					value=''
  // 					isValid={true}
  // 					validationMessage=''
  // 					handleOnChange={() => false}
  // 				/>;
  // 			}
  // 			else {
  // 				// initialise udl configuration
  // 				let udlConfiguration = find(props.udlConfiguration, {
  // 					'ExtensionType': field.ExtensionType.toString(),
  // 					'ListCode': field.FieldListCode,
  // 					'ExclusionList': field.ExclusionList,
  // 					'FormatValueAsCurrency': field.FormatValueAsCurrency
  // 				});

  // 				let checkForUDL = () => {
  // 					let exclusionList = [];

  // 					if (isEmpty(props.udlConfiguration)) return [];

  // 					if (isUndefined(props.udlConfiguration)) return [];

  // 					props.udlConfiguration.forEach((item) => {
  // 						if (item.ListCode === field.FieldListCode) exclusionList = item.ExclusionList;
  // 					});

  // 					return exclusionList;
  // 				};

  // 				return <UDLSelect
  // 					udlListName={field.FieldListCode}
  // 					selectId={field.FieldName}
  // 					selectSizes={['col-12']}
  // 					defaultPleaseSelect={true}
  // 					defaultValue={isNull(field.FieldValue) || isUndefined(field.FieldValue) ? '' : field.FieldValue}
  // 					handleOnChange={(event) => {
  // 						props.handleUpdateExtensions(extensionIndex, fieldIndex, event.target.value);
  // 					}}
  // 					labelDescription=''
  // 					isDisabled={!isExtensionChecked || props.disableExtensionFields.includes(field.FieldName) || props.isLoading}
  // 					isMandatory={field.FieldRequired}
  // 					validationMessage=''
  // 					isValid={true}
  // 					orderListBy='value'
  // 					exclusionList={checkForUDL()

  // 						//isEmpty(udlConfiguration) ? [] : get(udlConfiguration, 'ExclusionList', [])
  // 					}
  // 					formatValueAsCurrency={isEmpty(udlConfiguration) ? false : get(udlConfiguration, 'FormatValueAsCurrency', false)}
  // 				/>
  // 			}
  // 		}

  // 		// validate if this is a text field to display
  // 		if (field.FieldIsText) {
  // 			// process checked/unchecked functionality
  // 			if (!isExtensionChecked) {
  // 				return <TextInput
  // 					inputId={field.FieldName}
  // 					labelDescription=''
  // 					inputSizes={['col-12']}
  // 					isDisabled={true}
  // 					isMandatory={false}
  // 					value=''
  // 					isValid={true}
  // 					validationMessage=''
  // 					handleOnChange={() => false}
  // 				/>;
  // 			}
  // 			else
  // 				return <TextInput
  // 					inputId={field.FieldName}
  // 					labelDescription=''
  // 					inputSizes={['col-12']}
  // 					isDisabled={!isExtensionChecked || props.disableExtensionFields.includes(field.FieldName) || props.isLoading}
  // 					isMandatory={field.FieldRequired}
  // 					value={field.FieldValue}
  // 					isValid={true}
  // 					validationMessage=''
  // 					handleOnChange={(event) => {
  // 						props.handleUpdateExtensions(extensionIndex, fieldIndex, event.target.value);
  // 					}}
  // 				/>;
  // 		}
  // 	}
  // }

  // render the extensions

  return (
    <div className="main-content">
      <section className="section">
        <div className="row">
          <Card
            cardSizes={["col-12"]}
            cardColor="card-primary"
            cardId="customgrid"
            cardShowHide={true}
            cardHeaderText={isEmpty(props.title) ? "Item Details" : props.title}
            showCardFooter={
              props.validationMessages.length === 0 ? false : true
            }
            cardFooterTextArray={props.validationMessages}
            isLoading={false}
            hasRateButton={false}
            animateCard={true}
          >
            <div className="form-group">
              <form id="CustomTableControlForm">
                <table
                  className="table table-striped child-table table-responsive-sm table-responsive-md"
                  cellSpacing="0"
                  cellPadding="0"
                  border="0"
                >
                  <tbody>
                    {
                      <React.Fragment>
                        {header()}
                        {rows()}
                      </React.Fragment>
                    }
                  </tbody>
                </table>
              </form>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

// prop types for component
CustomGridControl.propTypes = {
  controlDataObject: PropTypes.object.isRequired,
};

// export the control
export default React.memo(CustomGridControl);
