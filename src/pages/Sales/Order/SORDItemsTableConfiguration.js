// import statements
// define the default extension config
export const defaultExtensionsConfig = {
	extensionsToExclude: '',
	logicRules: [],
	validationRules: {},
	hiddenExtensionFields: [],
	qRaterExtensionTypes: [],
	defaultExtensionValues: [],
	disableExtensionFields: [

	],
	defaultCheckedExtensions: [
	
		`CHECK_${EXTENSION_ITEMS_BC.SECURITYGAURD.id}`,
		`CHECK_${EXTENSION_ITEMS_BC.FIRE_EC.id}`,
		`CHECK_${EXTENSION_ITEMS_BC.GEYSER.id}`,
		`CHECK_${EXTENSION_ITEMS_BC.SHADENANDC.id}`,
		`CHECK_${EXTENSION_ITEMS_BC.ARCHITECTOPF.id}`,
		`CHECK_${EXTENSION_ITEMS_BC.CAPITALA.id}`,
		`CHECK_${EXTENSION_ITEMS_BC.COSTDCAEOH.id}`,
		`CHECK_${EXTENSION_ITEMS_BC.MOTORANDPE.id}`,
		`CHECK_${EXTENSION_ITEMS_BC.MUNICIPLEPSF.id}`,
		`CHECK_${EXTENSION_ITEMS_BC.PUB_AR.id}`,
		`CHECK_${EXTENSION_ITEMS_BC.TEMPRANDMALOSS.id}`,

		`LOI_${EXTENSION_ITEMS_BC.ADDITIONAL_CLAIMPC.id}`,
		`LOI_${EXTENSION_ITEMS_BC.SECURITYGAURD.id}`,
		`LOI_${EXTENSION_ITEMS_BC.FIRE_EC.id}`,
		`LOI_${EXTENSION_ITEMS_BC.GEYSER.id}`,
		`LOI_${EXTENSION_ITEMS_BC.SHADENANDC.id}`,
		`LOI_${EXTENSION_ITEMS_BC.ARCHITECTOPF.id}`,
		`LOI_${EXTENSION_ITEMS_BC.CAPITALA.id}`,
		`LOI_${EXTENSION_ITEMS_BC.COSTDCAEOH.id}`,
		`LOI_${EXTENSION_ITEMS_BC.MOTORANDPE.id}`,
		`LOI_${EXTENSION_ITEMS_BC.MUNICIPLEPSF.id}`,
		`LOI_${EXTENSION_ITEMS_BC.PUB_AR.id}`,
		`LOI_${EXTENSION_ITEMS_BC.TEMPRANDMALOSS.id}`,
		`LOI_${EXTENSION_ITEMS_BC.FIREPSU.id}`,
		`LOI_${EXTENSION_ITEMS_BC.IMPOSURC.id}`,
		`LOI_${EXTENSION_ITEMS_BC.PROCOC.id}`,
		`LOI_${EXTENSION_ITEMS_BC.SECCOST.id}`,
		`LOI_${EXTENSION_ITEMS_BC.STATUD.id}`,
		`LOI_${EXTENSION_ITEMS_BC.UPDATEOSS.id}`
		
	]
};

// define the extension config for business all risk
export const getExtensionsConfig = (type, riskstate, activeAddressIndex) => {
	// define the relevant extenesions configuration
	const extensionsConfiguration = {
		extensionsToExclude: '',
		logicRules: SasriaExtensionLogicRules(),
		validationRules: {},
		hiddenExtensionFields: [],
		qRaterExtensionTypes: [],
		defaultExtensionValues: [],
		disableExtensionFields: [],
		defaultCheckedExtensions: [
			
		]
	}

	// return extensions configuration
	return extensionsConfiguration;
};

