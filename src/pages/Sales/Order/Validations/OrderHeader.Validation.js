// import statements
import validator from 'validator';
import {OrderHeaderFieldSchema} from "../../../../Common/OrderContstant/order.js";

// specifies an array of rules for the main cover on the business all risk
export const OrderHeaderValidationRules = () => {
	return [
		{
			field: OrderHeaderFieldSchema.TYPE.key,
			isGeneralFormRule: false,
			method: validator.isEmpty,
			validWhen: false,
			message: 'Please select valid voucher type'
		},
		{
		field: OrderHeaderFieldSchema.PARTY_ORDER_NO.key,
		isGeneralFormRule: false,
		method: validator.isEmpty,
		validWhen: false,
		message: 'Please select party order no.'
	},
	{
		field: OrderHeaderFieldSchema.ORDER_NO.key,
		isGeneralFormRule: false,
		method: validator.isEmpty,
		validWhen: false,
		message: 'Please select order no.'
	},
	{
		field: OrderHeaderFieldSchema.ORDER_DATE.key,
		isGeneralFormRule: false,
		method: validator.isEmpty,
		validWhen: false,
		message: 'Please select valid date.'
	},
	{
		field: OrderHeaderFieldSchema.PARTY_ORDER_DATE.key,
		isGeneralFormRule: false,
		method: validator.isEmpty,
		validWhen: false,
		message: 'Please select valid date.'
	},
	{
		field: OrderHeaderFieldSchema.AGAINST_FORM.key,
		isGeneralFormRule: false,
		method: validator.isEmpty,
		validWhen: false,
		message: 'Please select valid form.'
	},
	{
		field: OrderHeaderFieldSchema.PARTY.key,
		isGeneralFormRule: false,
		method: validator.isEmpty,
		validWhen: false,
		message: 'Please select valid Party name.'
	},
	{
		field: OrderHeaderFieldSchema.DELIVERY_TO.key,
		isGeneralFormRule: false,
		method: validator.isEmpty,
		validWhen: false,
		message: 'Please select valid Delivery To.'
	},
	{
		field: OrderHeaderFieldSchema.ORDER_TYPE.key,
		isGeneralFormRule: false,
		method: validator.isEmpty,
		validWhen: false,
		message: 'Please select valid paper type.'
	},

	{
		field: OrderHeaderFieldSchema.DELIVERY_DATE.key,
		isGeneralFormRule: false,
		method: validator.isEmpty,
		validWhen: false,
		message: 'Please select delivery date.'
	},
	{
		field: OrderHeaderFieldSchema.CONSIGNEE.key,
		isGeneralFormRule: false,
		method: validator.isEmpty,
		validWhen: false,
		message: 'Please select Consignee name.'
	},
	{
		field: OrderHeaderFieldSchema.CONSIGNEE.key,
		isGeneralFormRule: false,
		method: validator.isEmpty,
		validWhen: false,
		message: 'Please select To place name.'
	},
]
};