export const ITEMCOLUMNS = {
  V_SNO: "V_SNO",
  ITEM_CODE: "ItemCode",
  ITEM_NAME: "IName",
  ITEM_DESCRIPTION: "ItemDesc",
  ITEM_BFCODE: "BF",
  ITEM_BF: "BFName",
  ITEM_SKU: "SKU",
  ITEM_WIDTH: "SizeReel",
  ITEM_HEIGHT: "SizeHeight",
  ITEM_UNIT: "SizeUnit",
  ITEM_SIZE_CM: "SizeCM",
  ITEM_SIZE_INCH: "SizeInch",
  ITEM_GRAIN: "Grain",
  ITEM_GSM_CODE: "GSM",
  ITEM_GSM: "GSMName",
  ITEM_REEL: "BalanceReel",
  ITEM_WEIGHT_SEC_UNIT: "ItemWeightSec",
  ITEM_SEC_UNIT: "ItemSecUnit",
  ITEM_CONVERTION_RATE: "ItemConvertionRate",
  ITEM_WEIGHT_SKU: "BalanceWeight",
  ITEM_TOL: "ItemTOL",
  ITEM_RATE: "ItemRate",
  ITEM_AMOUNT: "ItemAmount",
  ITEM_OH: "ItemOH",
  ITEM_ADJ: "ItemAdj",
  ITEM_ADJ_REEL: "ItemAdjReel",
  ITEM_ADJ_WEIGHT: "ItemAdjWeight",
};
export const fields = {
  [ITEMCOLUMNS.V_SNO]: "",
  [ITEMCOLUMNS.ITEMCOLUMNS_CODE]: "",
  [ITEMCOLUMNS.ITEMCOLUMNS_NAME]: "",
  [ITEMCOLUMNS.ITEMCOLUMNS_DESCRIPTION]: "",
  //   [ITEMCOLUMNS.ITEMCOLUMNS_BFCODE]: "",
  //   [ITEMCOLUMNS.ITEMCOLUMNS_BF]: "",
  //   [ITEMCOLUMNS.ITEMCOLUMNS_SKU]: "",
  //   [ITEMCOLUMNS.ITEMCOLUMNS_WIDTH]: "",
  //   [ITEMCOLUMNS.ITEMCOLUMNS_HEIGHT]: "",
  //   [ITEMCOLUMNS.ITEMCOLUMNS_UNIT]: "",
  //   [ITEMCOLUMNS.ITEMCOLUMNS_GRAIN]: "",
  //   [ITEMCOLUMNS.ITEMCOLUMNS_GSM_CODE]: "",
  //   [ITEMCOLUMNS.ITEMCOLUMNS_GSM]: "",
  //   [ITEMCOLUMNS.ITEMCOLUMNS_REEL]: "",
  //   [ITEMCOLUMNS.ITEMCOLUMNS_WEIGHT_SEC_UNIT]: "",
};
export const ORDER_TABLE = {
  columns: {
    V_SNO: "V_SNO",
    ItemCode: "ItemCode",
    IName: "IName",
    //   ItemDesc: 'ItemDesc',
    //   BF: 'BF',
    //   BFName: 'BFName',
    //   SizeReel: 'SizeReel',
    //   SizeHeight:'SizeHeight',
    //   SizeUnit: 'SizeUnit',
    //   Grain: 'Grain',
    //   GSM: 'GSM',
    //   GSMName: 'GSMName',
    //   BalanceReel: 'BalanceReel',
    //   ItemWeightSec: 'ItemWeightSec',
    //   ItemSecUnit: 'ItemSecUnit',
    //   BalanceWeight: 'BalanceWeight',
    //   SKU: 'SKU',
    QTY: "QTY",
    Rate: "Rate",
    addbtn: "addbtn",
    delbtn: "delbtn",
  },
  V_SNO: {
    title: "S. No.",
    type: "text",
    class: "",
    event: "",
    inputSizes: ["col-12"],
  },
  ItemCode: {
    title: "Item Code",
    type: "text",
    class: "", //'no-minimum',
    event: "",
    inputSizes: ["col-12"],
  },
  IName: {
    title: "Item Name",
    type: "text",
    class: "",
    event: "",
    inputSizes: ["col-12"],
  },
  ItemDesc: {
    title: "Desc.",
    type: "text",
    class: "",
    event: "",
    inputSizes: ["col-12"],
  },
  BF: {
    title: "BF",
    type: "text",
    class: ".d-none",
    event: "",
    inputSizes: ["col-12"],
  },
  BFName: {
    title: "BF",
    type: "text",
    class: "",
    event: "",
    inputSizes: ["col-12"],
  },
  SizeReel: {
    title: "Width",
    type: "text",
    class: "",
    event: "",
    inputSizes: ["col-12"],
  },
  SizeHeight: {
    title: "Length",
    type: "text",
    class: "",
    event: "",
    inputSizes: ["col-12"],
  },
  SizeUnit: {
    title: "Unit",
    type: "text",
    class: "",
    event: "",
    inputSizes: ["col-12"],
  },
  Grain: {
    title: "Grain",
    type: "text",
    class: "",
    event: "",
    inputSizes: ["col-12"],
  },
  GSM: {
    title: "GSMCode",
    type: "text",
    class: "", //'no-minimum',
    event: "",
    inputSizes: ["col-12"],
  },
  GSMName: {
    title: "GSM",
    type: "text",
    class: "",
    event: "",
    inputSizes: ["col-12"],
  },
  BalanceReel: {
    title: "Reel/Pack",
    type: "text",
    class: "",
    event: "",
  },
  ItemWeightSec: {
    title: "Weight (Sec. Unit)",
    type: "text",
    class: "",
    event: "",
    inputSizes: ["col-12"],
  },
  ItemSecUnit: {
    title: "Sec. Unit",
    type: "text",
    class: "",
    event: "",
    inputSizes: ["col-12"],
  },
  BalanceWeight: {
    title: "Weight (SKU)",
    type: "text",
    class: "",
    event: "",
    inputSizes: ["col-12"],
  },
  SKU: {
    title: "SKU",
    type: "text",
    class: "",
    event: "",
    inputSizes: ["col-12"],
  },
  QTY: {
    title: "Qty.",
    type: "text",
    class: "",
    event: "",
    inputSizes: ["col-12"],
  },
  Rate: {
    title: "Rate",
    type: "text",
    class: "",
    event: "",
    inputSizes: ["col-12"],
  },
  addbtn: {
    title: "Add",
    type: "button",
    class: "",
    event: "addItem",
    inputSizes: ["col-12"],
  },
  delbtn: {
    title: "Delete",
    type: "button",
    class: "",
    event: "removeItem",
    inputSizes: ["col-12"],
  },
};

export var emptyRow = {
  V_SNO: "",
  ItemCode: "",
  IName: "",
  Qty: 0,
  Rate: 0,
};
