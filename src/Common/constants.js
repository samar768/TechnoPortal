/* eslint-disable no-undef */

// declare constants for the general application
const applicationMode='add'
// export const IS_VIEW_MODE = applicationMode === 'View' || insuranceFileTypeCode === 'MTAQCAN' || insuranceFileTypeCode === 'MTAQREINS';

export const IS_VIEW_MODE = false;

// declare constants for the api handler function
// export const RISK_HANDLER_URL = `${baseUrl}Handlers/RiskHandler.ashx`;
// export const INDUSTRY_HANDLER_URL = `${baseUrl}Handlers/IndustryCntrl.ashx`;
export const GET_REQUEST = 'GET';
export const POST_REQUEST = 'POST';
export const HEADERS = {'Content-Type': 'text/html; charset=utf-8'};
export const HEADERS_JSON_CHARSET = {'Content-Type': 'application/json; charset=utf-8'};
export const HEADERS_JSON = {'Content-Type':'application/json; charset=utf-8'};
export const GET_UDL_HANDLER_METHOD_NAME = 'masters';


// declare constants for child items
export const GET_CHILD_ITEMS_HANDLER_METHOD_NAME = 'GetChildItems';
export const DELETE_CHILD_ITEM_HANDLER_METHOD_NAME = 'DeleteChildItem';
export const ADD_CHILD_ITEM_HANDLER_METHOD_NAME = 'AddChildItem';
export const EDIT_CHILD_ITEM_HANDLER_METHOD_NAME = 'EditChildItem';
export const ADD_CHILD_ITEM_RATE_HANDLER_METHOD_NAME = 'AddChildItemAndRate';
export const EDIT_CHILD_ITEM_RATE_HANDLER_METHOD_NAME = 'EditChildItemAndRate';
export const DELETE_CHILD_ITEMS_HANDLER_METHOD_NAME = 'DeleteChildItems';
export const UPDATE_RATE_CHILD_ITEMS_HANDLER_METHOD_NAME = 'UpdateRateChildItems';

// declare constants for endorsements
export const GET_ENDORSEMENTS_HANDLER_METHOD_NAME = 'GetSectionEndorsements';
export const ADD_ENDORSEMENT_ITEM_HANDLER_METHOD_NAME = 'AddEndorsementItem';
export const DELETE_ENDORSEMENT_ITEM_HANDLER_METHOD_NAME = 'DeleteEndorsementItem';
export const VIEW_ENDORSEMENT_ITEM_HANDLER_METHOD_NAME = 'ViewEndorsementItem';
export const EDIT_ENDORSEMENT_ITEM_HANDLER_METHOD_NAME = 'EditEndorsementItem';
export const OPEN_ENDORSEMENT_ITEM_HANDLER_METHOD_NAME = 'OpenEndorsementItem';

// declare constants for vehicle lookup related functions
// export const VEHICLE_HANDLER_URL = `${baseUrl}Handlers/VehicleFindHandler.ashx`;
export const GET_MAKES_HANDLER_METHOD_NAME = 'GetMirroringMakeList';
export const GET_MODELS_HANDLER_METHOD_NAME = 'GetMirroringModelList';
export const GET_YEARS_HANDLER_METHOD_NAME = 'GetMirroringMakeModeList';
export const GET_VALID_YEARS_HANDLER_METHOD_NAME = 'GetMirroringYears';
export const GET_CARAVANS_TRAILERS_HANDLER_METHOD_NAME = 'GetMirroringCaravansTrailers';
export const GET_SPECIAL_TYPES_HANDLER_METHOD_NAME = 'GetMirroringSpecialTypes';

// declare constants for retrieving RIS data
export const GET_ADDRESS_RIS_DATA_METHOD_NAME = 'GetAddressRIS';

// Get Api Method names
export const GET_UDL_SERVICENAME = 'masters';