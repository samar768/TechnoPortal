export const TYPE = 'TxtType';
export const PARTY = 'TxtParty';
export const PARTY_ORDER_NO = 'TxtPOrdNo';
export const PARTY_ORDER_DATE = 'TxtPtyOrdDate';
export const ORDER_NO = 'TxtRecId';
export const ORDER_DATE = 'TxtOrdDate';
export const AGAINST_FORM = 'TxtAgtForm';
export const EXCISABLE = 'TxtExcisable';
export const ORDER_TYPE = 'TxtOrderType';
export const DELIVERY_TO = 'TxtDeliveryAt';
export const DELIVERY_DATE = 'TxtDeliveryDate';
export const AMENDMENT_ORDER_NO = 'TxtAmdOrderNo';
export const CONSIGNEE = 'TxtConsignee';
export const SALES_TYPE = 'TxtSaleV_type';
export const TO_PLACE = 'TxtToPlace';
export const CONTRACTUAL_ORDER_REF = 'TxtContratualOrdRef'
export const V_NO = 'TxtVNo';
export const DOC_ID = 'StrDocID';
export const DISTRIBUTOR = 'TxtDistributor';

export const ITEM = {
  V_SNO: 'V_SNO',
  ITEM_CODE: 'ItemCode',
  ITEM_NAME: 'IName',
  ITEM_DESCRIPTION: 'ItemDesc',
  ITEM_BFCODE: 'BF',
  ITEM_BF: 'BFName',
  ITEM_SKU: 'SKU',
  ITEM_WIDTH: 'SizeReel',
  ITEM_HEIGHT: 'SizeHeight',
  ITEM_UNIT: 'SizeUnit',
  ITEM_SIZE_CM: 'SizeCM',
  ITEM_SIZE_INCH: 'SizeInch',
  ITEM_GRAIN: 'Grain',
  ITEM_GSM_CODE: 'GSM',
  ITEM_GSM: 'GSMName',
  ITEM_REEL: 'BalanceReel',
  ITEM_WEIGHT_SEC_UNIT: 'ItemWeightSec',
  ITEM_SEC_UNIT: 'ItemSecUnit',
  ITEM_CONVERTION_RATE: 'ItemConvertionRate',
  ITEM_WEIGHT_SKU: 'BalanceWeight',
  ITEM_TOL: 'ItemTOL',
  ITEM_RATE: 'ItemRate',
  ITEM_AMOUNT: 'ItemAmount',
  ITEM_OH: 'ItemOH',
  ITEM_ADJ: 'ItemAdj',
  ITEM_ADJ_REEL: 'ItemAdjReel',
  ITEM_ADJ_WEIGHT: 'ItemAdjWeight',
}
 
// export const s = 'ItemDesc';
// export const s = 'SizeReel';
// export const s = 'SizeHeight';
// export const s = 'SizeUnit';
// export const s = 'SizeCM';
// export const s = 'SizeInch';
// export const s = 'GSMName';
// export const s = 'GSM';
// export const = 'SKU';
// export const = 'Rate';
// export const = 'BalanceReel';
// export const = 'BalanceWeight';
// export const = 'BF';
// export const = 'BFName';
// export const = 'Grain';

export const ORDER_TABLE = {
  columns: {
    ID: 'ID',
    V_SNO: 'V_SNO',
    ItemCode: 'ItemCode',
    IName: 'IName',
    ItemDesc: 'ItemDesc',
    BF: 'BF',
    BFName: 'BFName',
    SizeReel: 'SizeReel',
    SizeHeight:'SizeHeight',
    SizeUnit: 'SizeUnit',
    Grain: 'Grain',
    GSM: 'GSM',
    GSMName: 'GSMName',
    BalanceReel: 'BalanceReel',
    ItemWeightSec: 'ItemWeightSec',
    ItemSecUnit: 'ItemSecUnit',
    BalanceWeight: 'BalanceWeight',
    SKU: 'SKU',
    // description: 'description',
    // bfcode: 'bfcode',
    // bf: 'bf',
    // width: 'width',
    // heigth: 'height',
    // unit: 'unit',
    // sizecm: 'sizecm',
    // sizeinch: 'sizeinch',
    // grain: 'grain',
    delbtn: 'delbtn',
    editbtn: 'editbtn',
  },
  ID: {
    title: 'ID',
    type: 'text',
    class: 'no-view',
    event: '',
  },
  V_SNO: {
    title: 'S. No.',
    type: 'text',
    class: '',
    event: '',
  },
  ItemCode: {
    title: 'Item Code',
    type: 'text',
    class: 'no-view', //'no-minimum',
    event: '',
  },
  IName: {
    title: 'Item Name',
    type: 'text',
    class: '',
    event: '',
  },
  ItemDesc: {
    title: 'Desc.',
    type: 'text',
    class: '',
    event: '',
  },
  BF: {
    title: 'BF',
    type: 'text',
    class: 'no-view',
    event: '',
  },
  BFName: {
    title: 'BF',
    type: 'text',
    class: '',
    event: '',
  },
  SizeReel: {
    title: 'Width',
    type: 'text',
    class: '',
    event: '',
  },
  SizeHeight: {
    title: 'Length',
    type: 'text',
    class: '',
    event: '',
  },
  SizeUnit: {
    title: 'Unit',
    type: 'text',
    class: '',
    event: '',
  },
  Grain: {
    title: 'Grain',
    type: 'text',
    class: '',
    event: '',
  },
  GSM: {
    title: 'GSMCode',
    type: 'text',
    class: 'no-view', //'no-minimum',
    event: '',
  },
  GSMName: {
    title: 'GSM',
    type: 'text',
    class: '',
    event: '',
  },
  BalanceReel: {
    title: 'Reel/Pack',
    type: 'text',
    class: '',
    event: '',
  },
  ItemWeightSec: {
    title: 'Weight (Sec. Unit)',
    type: 'text',
    class: '',
    event: ''
  },
  ItemSecUnit: {
    title: 'Sec. Unit',
    type: 'text',
    class: '',
    event: ''
  },
  BalanceWeight: {
    title: 'Weight (SKU)',
    type: 'text',
    class: '',
    event: ''
  },
  SKU: {
    title: 'SKU',
    type: 'text',
    class: '',
    event: '',
  },
  // bfcode: {
  //   title: 'BF Code',
  //   type: 'text',
  //   class: 'no-view',
  //   event: ''
  // },
  // bf: {
  //   title: 'BF',
  //   type: 'text',
  //   class: '',
  //   event: '',
  // },
  // width: {
  //   title: 'Width',
  //   type: 'text',
  //   class: '',
  //   event: '',
  // },
  // height: {
  //   title: 'Length',
  //   type: 'text',
  //   class: '',
  //   event: '',
  // },
  // unit: {
  //   title: 'Unit',
  //   type: 'text',
  //   class: '',
  //   event: '',
  // },
  // description: {
  //   title: 'Description',
  //   type: 'text',
  //   class: '',
  //   event: '',
  // }, 
  // sizecm: {
  //   title: 'Size CM',
  //   type: 'text',
  //   class: 'no-view',
  //   event: '',
  // },
  // sizeinch: {
  //   title: 'Size Inch',
  //   type: 'text',
  //   class: 'no-view',
  //   event: '',
  // },
  // grain: {
  //   title: 'Grain',
  //   type: 'text',
  //   class: '',
  //   event: '',
  // },
  delbtn: {
    title: 'Delete',
    type: 'button',
    class: '',
    event: 'removeItem',
  },
  editbtn: {
    title: 'Edit',
    type: 'button',
    class: '',
    event: 'removeItem',
  },
};