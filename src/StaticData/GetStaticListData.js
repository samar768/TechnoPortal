import {
	useState,
	useEffect
} from 'react';

function GetStaticListData  (listtype)  {

    const [staticdata, setStaticdata] = useState([]);

    const getdata =  () => {
        switch (listtype) {
            case 'delivery_to': {
                var filter = listtype.filter;
                var response = [
                    { SubCode: 'HO323', Name: 'BANGKOR PULP AND PAPER CORPORATIO', ManualCode: '323', Address: '', CityName: '', DName: '', DISCity: '', Zone: '', DZone: '', CityCode: 'NULL' },
                    { SubCode: 'HO9', Name: 'BANGLADESH ', ManualCode: '9', Address: '', CityName: '', DName: '', DISCity: '', Zone: '', DZone: '', CityCode: 'NULL' },
                    { SubCode: 'HO3', Name: 'CHANDAN MAJUMDAR ', ManualCode: '3', Address: '', CityName: '', DName: '', DISCity: '', Zone: '', DZone: '', CityCode: 'NULL' },
                    { SubCode: 'HO5', Name: 'DYNAMIC ENTERPRISE', ManualCode: '5', Address: '', CityName: '', DName: '', DISCity: '', Zone: '', DZone: '', CityCode: 'NULL' },
                    { SubCode: 'HO287', Name: 'FRIENDS PACKAGING', ManualCode: '287', Address: 'LAXMIPUR, DARANDA, BIRBHUM,PIN-731236 ', CityName: 'Birbhum', DName: '', DISCity: '', Zone: '', DZone: '', CityCode: 'HO14' },
                    { SubCode: 'HO6', Name: 'GAURAB SENSARMA', ManualCode: '6', Address: '', CityName: '', DName: '', DISCity: '', Zone: '', DZone: '', CityCode: 'NULL' },
                    { SubCode: 'HO7', Name: 'MAA PAPER AGENCY ', ManualCode: '7', Address: '', CityName: '', DName: '', DISCity: '', Zone: '', DZone: '', CityCode: 'NULL' },
                    { SubCode: 'HO109', Name: 'UNITECH PAPER MILLS PRIVATE LIMITED', ManualCode: '109', Address: '', CityName: '', DName: '', DISCity: '', Zone: '', DZone: '', CityCode: 'NULL' },
                    { SubCode: 'HO270', Name: 'SHREE JAGANNATH PACKERS', ManualCode: '270', Address: 'INDUSTRIAL ESTATE, MADHUPATNA,CUTTACK-753010', CityName: 'Cuttack', DName: '', DISCity: '', Zone: '', DZone: '', CityCode: 'HO62' },
                ]

                if (filter.length === 0) return [];

                response = response
                    .filter((item) => {
                        if (item.Name.toUpperCase().startsWith(filter.substring(0, 1).toUpperCase())) {
                            return true;
                        }
                    });

                return response;
            }
            case 'VOUCHERTYPE': {
                // Select VT.V_Type ,VT.Description 
                // From Voucher_Type VT 
                // Where VT.Category='SORD' 
                // Order By VT.Description
                setStaticdata([{
                    jsonData: [
                        { Code: 'SORD', Description: 'Sales Order' },
                        { Code: 'ORD', Description: 'Orders' }
                    ]
                }]);
                break;
            }
            case 'party_list': {
                var filter = listtype.filter;
                var response = [
                    {
                        SubCode: 'HO67',
                        Name: 'A.R. ENTERPRISE',
                        ManualCode: '67',
                        Address: 'Z3/430/1, JELIAPARA ROADKOLKATA',
                        CityName: 'Kolkata',
                        DName: 'SHREE SHANTI TRADES PVT. LTD',
                        DISCity: 'Kolkata',
                        Zone: '',
                        DZone: '',
                        CityCode: 'HO2',
                    }, {
                        SubCode: 'HO348',
                        Name: 'ABHIJIT PACKAGING',
                        ManualCode: '348',
                        Address: '',
                        CityName: 'Kolkata',
                        DName: 'Local Sale',
                        DISCity: 'Kolkata',
                        Zone: '',
                        DZone: '',
                        CityCode: 'HO2',
                    }, {
                        SubCode: 'HO44',
                        Name: 'ADITYA PACKAGING INDUSTRIES',
                        ManualCode: '44',
                        Address: 'SAHID ASHRAM ROAD, B.DEOGHAR',
                        CityName: 'JHARKHAND',
                        DName: 'Local (Other)',
                        DISCity: '',
                        Zone: '',
                        DZone: '',
                        CityCode: 'HO83',
                    }, {
                        SubCode: 'HO47',
                        Name: 'BADITYA PACKAGING INDUSTRIES',
                        ManualCode: '44',
                        Address: 'SAHID ASHRAM ROAD, B.DEOGHAR',
                        CityName: 'JHARKHAND',
                        DName: 'Local (Other)',
                        DISCity: '',
                        Zone: '',
                        DZone: '',
                        CityCode: 'HO83',
                    },
                    { SubCode: 'HO323', Name: 'BANGKOR PULP AND PAPER CORPORATIO', ManualCode: '323', Address: '', CityName: '', DName: '', DISCity: '', Zone: '', DZone: '', CityCode: '' },
                    { SubCode: 'HO9', Name: 'BANGLADESH ', ManualCode: '9', Address: '', CityName: '', DName: '', DISCity: '', Zone: '', DZone: '', CityCode: '' },
                    { SubCode: 'HO3', Name: 'CHANDAN MAJUMDAR ', ManualCode: '3', Address: '', CityName: '', DName: '', DISCity: '', Zone: '', DZone: '', CityCode: '' },
                    { SubCode: 'HO5', Name: 'DYNAMIC ENTERPRISE', ManualCode: '5', Address: '', CityName: '', DName: '', DISCity: '', Zone: '', DZone: '', CityCode: '' },
                    { SubCode: 'HO287', Name: 'FRIENDS PACKAGING', ManualCode: '287', Address: 'LAXMIPUR, DARANDA, BIRBHUM,PIN-731236 ', CityName: 'Birbhum', DName: '', DISCity: '', Zone: '', DZone: '', CityCode: 'HO14' },
                    { SubCode: 'HO6', Name: 'GAURAB SENSARMA', ManualCode: '6', Address: '', CityName: '', DName: '', DISCity: '', Zone: '', DZone: '', CityCode: '' },
                    { SubCode: 'HO7', Name: 'MAA PAPER AGENCY ', ManualCode: '7', Address: '', CityName: '', DName: '', DISCity: '', Zone: '', DZone: '', CityCode: '' },
                    { SubCode: 'HO109', Name: 'UNITECH PAPER MILLS PRIVATE LIMITED', ManualCode: '109', Address: '', CityName: '', DName: '', DISCity: '', Zone: '', DZone: '', CityCode: '' },
                    { SubCode: 'HO270', Name: 'SHREE JAGANNATH PACKERS', ManualCode: '270', Address: 'INDUSTRIAL ESTATE, MADHUPATNA,CUTTACK-753010', CityName: 'Cuttack', DName: '', DISCity: '', Zone: '', DZone: '', CityCode: 'HO62' },
                ]

                if (!filter || filter.length === 0) return response;

                response = response
                    .filter((item) => {
                        if (item.Name.toUpperCase().startsWith(filter.substring(0, 1).toUpperCase())) {
                            return true;
                        }
                    });

                return response;
            }
            case 'consignee_list': {
                var response = [
                    { SubCode: 'HO67', Name: 'A.R. ENTERPRISE', ManualCode: '67', Address: 'Z3/430/1, JELIAPARA ROADKOLKATA', CityName: 'Kolkata', DName: 'SHREE SHANTI TRADES PVT. LTD', DISCity: 'Kolkata', Zone: '', DZone: '', CityCode: 'HO2', },
                    { SubCode: 'HO348', Name: 'ABHIJIT PACKAGING', ManualCode: '348', Address: '', CityName: 'Kolkata', DName: 'Local Sale', DISCity: 'Kolkata', Zone: '', DZone: '', CityCode: 'HO2', },
                    { SubCode: 'HO44', Name: 'ADITYA PACKAGING INDUSTRIES', ManualCode: '44', Address: 'SAHID ASHRAM ROAD, B.DEOGHAR', CityName: 'JHARKHAND', DName: 'Local (Other)', DISCity: '', Zone: '', DZone: '', CityCode: 'HO83', },
                    { SubCode: 'HO47', Name: 'BADITYA PACKAGING INDUSTRIES', ManualCode: '44', Address: 'SAHID ASHRAM ROAD, B.DEOGHAR', CityName: 'JHARKHAND', DName: 'Local (Other)', DISCity: '', Zone: '', DZone: '', CityCode: 'HO83', },
                    { SubCode: 'HO323', Name: 'BANGKOR PULP AND PAPER CORPORATIO', ManualCode: '323', Address: '', CityName: '', DName: '', DISCity: '', Zone: '', DZone: '', CityCode: '' },
                    { SubCode: 'HO9', Name: 'BANGLADESH ', ManualCode: '9', Address: '', CityName: '', DName: '', DISCity: '', Zone: '', DZone: '', CityCode: '' },
                    { SubCode: 'HO3', Name: 'CHANDAN MAJUMDAR ', ManualCode: '3', Address: '', CityName: '', DName: '', DISCity: '', Zone: '', DZone: '', CityCode: '' },
                    { SubCode: 'HO5', Name: 'DYNAMIC ENTERPRISE', ManualCode: '5', Address: '', CityName: '', DName: '', DISCity: '', Zone: '', DZone: '', CityCode: '' },
                    { SubCode: 'HO287', Name: 'FRIENDS PACKAGING', ManualCode: '287', Address: 'LAXMIPUR, DARANDA, BIRBHUM,PIN-731236 ', CityName: 'Birbhum', DName: '', DISCity: '', Zone: '', DZone: '', CityCode: 'HO14' },
                    { SubCode: 'HO6', Name: 'GAURAB SENSARMA', ManualCode: '6', Address: '', CityName: '', DName: '', DISCity: '', Zone: '', DZone: '', CityCode: '' },
                    { SubCode: 'HO7', Name: 'MAA PAPER AGENCY ', ManualCode: '7', Address: '', CityName: '', DName: '', DISCity: '', Zone: '', DZone: '', CityCode: '' },
                    { SubCode: 'HO109', Name: 'UNITECH PAPER MILLS PRIVATE LIMITED', ManualCode: '109', Address: '', CityName: '', DName: '', DISCity: '', Zone: '', DZone: '', CityCode: '' },
                    { SubCode: 'HO270', Name: 'SHREE JAGANNATH PACKERS', ManualCode: '270', Address: 'INDUSTRIAL ESTATE, MADHUPATNA,CUTTACK-753010', CityName: 'Cuttack', DName: '', DISCity: '', Zone: '', DZone: '', CityCode: 'HO62' },
                ]

                return response;
            }
            case 'v_type': {
                return [
                    { V_Type: 'INVCA', Description: 'Captive Invoice' },
                    { V_Type: 'INVCG', Description: 'Captive Invoice-GST' },
                    { V_Type: 'INVEU', Description: 'Central Sales  Invoice' },
                    { V_Type: 'INVCO', Description: 'Consignment Invoice' },
                    { V_Type: 'INVE', Description: 'Export Invoice' },
                    { V_Type: 'I-GST', Description: 'IGST' },
                    { V_Type: 'L-GST', Description: 'LGST' },
                    { V_Type: 'LGSTc', Description: 'LGSTc' },
                    { V_Type: 'INVV', Description: 'VAT Invoice' },
                ]
            }
            case 'order_type': {
                return [
                    { Code: 'O', Name: 'Other' },
                    { Code: 'R', Name: 'Paper' },
                    { Code: 'S', Name: 'Sheet' },
                ]
            }
            case 'against_form': {
                return [
                    { Form_Code: 'HO1', Form_Desc: 'CST 2 % agt Form C', Tax_Per: 2 },
                    { Form_Code: 'HO2', Form_Desc: 'CST 5% W/o Form', Tax_Per: 5 },
                    { Form_Code: 'HO6', Form_Desc: 'Exportable sales', Tax_Per: 0 },
                    { Form_Code: 'HO5', Form_Desc: 'Form H agt Export', Tax_Per: 0 },
                    { Form_Code: 'HO17', Form_Desc: 'IGST-SLES', Tax_Per: 12 },
                    { Form_Code: 'HO18', Form_Desc: 'LGST-SALES', Tax_Per: 6 },
                    { Form_Code: 'HO7', Form_Desc: 'VAT 0 % agt Home Consumpt', Tax_Per: 0 },
                    { Form_Code: 'HO4', Form_Desc: 'VAT 2 % agt Form', Tax_Per: 2 },
                    { Form_Code: 'HO14', Form_Desc: 'VAT 6 % W/o Form', Tax_Per: 6 },
                    { Form_Code: 'HO3', Form_Desc: 'VAT 5 % W/o Form', Tax_Per: 5 },
                ]
            }
            case 'yes_no':
                return [
                    { Code: 'Y', Name: 'Yes' },
                    { Code: 'N', Name: 'No' }
                ]
            case 'to_place_list':
                return [
                    { CityCode: 'HO75', CityName: '24 PGS (NORTH)', State: 'HO36' },
                    { CityCode: 'HO12', CityName: '24 Pgs.(S)', State: '' },
                    { CityCode: 'HO16', CityName: '9th Mile', State: '' },
                    { CityCode: 'HO23', CityName: 'ADHERI EAST', State: 'HO22' },
                    { CityCode: 'HO76', CityName: 'Agartala', State: 'HO34' },
                    { CityCode: 'HO64', CityName: 'Aligarh', State: '' },
                    { CityCode: 'HO40', CityName: 'ALLAHABAD', State: 'HO35' },
                    { CityCode: 'HO87', CityName: 'ARAMBAGH', State: 'HO36' },
                    { CityCode: 'HO88', CityName: 'ASANSOL', State: 'HO36' },
                    { CityCode: 'HO38', CityName: 'AZARA', State: '' },
                    { CityCode: 'HO7', CityName: 'Baddi', State: '' },
                    { CityCode: 'HO4', CityName: 'BALICHAK', State: 'HO36' },
                    { CityCode: 'HO94', CityName: 'BANHOOGHLY', State: 'HO36' },
                    { CityCode: 'HO89', CityName: 'BARASAT', State: 'HO36' },
                    { CityCode: 'HO97', CityName: 'BELIAGHATA', State: 'HO36' },
                    { CityCode: 'HO14', CityName: 'Birbhum', State: 'HO36' },
                    { CityCode: 'HO52', CityName: 'Bolagar', State: 'HO36' },
                    { CityCode: 'HO45', CityName: 'BORKA ROAD,CHANGSARI', State: '' },
                    { CityCode: 'HO42', CityName: 'BURDWAN', State: 'HO36' },
                    { CityCode: 'HO79', CityName: 'Cachar', State: 'HO5' },
                    { CityCode: 'HO49', CityName: 'Changsari', State: 'HO5' },
                    { CityCode: 'HO33', CityName: 'Chayygaon', State: 'HO5' },
                    { CityCode: 'HO92', CityName: 'CHITTAGONG', State: 'HO38' },
                    { CityCode: 'HO62', CityName: 'Cuttack', State: 'HO27' },
                    { CityCode: 'HO57', CityName: 'Darjeeling', State: 'HO36' },
                    { CityCode: 'HO58', CityName: 'Darrang', State: 'HO5' },
                    { CityCode: 'HO74', CityName: 'Deoghar', State: 'HO17' },
                    { CityCode: 'HO54', CityName: 'DEUDUAR', State: '' },
                    { CityCode: 'HO91', CityName: 'DHAKA', State: 'HO38' },
                    { CityCode: 'HO28', CityName: 'DHUBRI', State: 'HO5' },
                    { CityCode: 'HO8', CityName: 'Distt-Solan', State: 'HO15' },
                    { CityCode: 'HO31', CityName: 'DODORA,', State: '' },
                    { CityCode: 'HO70', CityName: 'EAST SIKKIM', State: 'HO31' },
                    { CityCode: 'HO60', CityName: 'Faridabad', State: 'HO14' },
                    { CityCode: 'HO99', CityName: 'GAJIPUR', State: 'HO38' },
                    { CityCode: 'HO68', CityName: 'Ganganagar', State: 'HO36' },
                    { CityCode: 'HO55', CityName: 'Giridih', State: 'HO17' },
                    { CityCode: 'HO85', CityName: 'GOPALPUR', State: 'HO36' },
                    { CityCode: 'HO6', CityName: 'Gorakhpur', State: 'HO35' },
                    { CityCode: 'HO15', CityName: 'Greater Noida', State: '' },
                    { CityCode: 'HO1', CityName: 'Guwahati', State: 'HO5' },
                    { CityCode: 'HO11', CityName: 'Hajipur', State: 'HO6' },
                    { CityCode: 'HO29', CityName: 'HALDIA', State: 'HO36' },
                    { CityCode: 'HO46', CityName: 'HOOGHLY', State: 'HO36' },
                    { CityCode: 'HO10', CityName: 'Howrah', State: 'HO36' },
                    { CityCode: 'HO53', CityName: 'ISLAMPUR', State: '' },
                    { CityCode: 'HO30', CityName: 'ITANAGAR', State: '' },
                    { CityCode: 'HO56', CityName: 'JALPAIGURI', State: 'HO36' },
                    { CityCode: 'HO61', CityName: 'Jamshedpur', State: 'HO17' },
                    { CityCode: 'HO25', CityName: 'JAMURIA', State: '' },
                    { CityCode: 'HO43', CityName: 'Jaunpur', State: 'HO35' },
                    { CityCode: 'HO81', CityName: 'JHARGRAM', State: 'HO36' },
                    { CityCode: 'HO83', CityName: 'JHARKHAND', State: 'HO17' },
                    { CityCode: 'HO50', CityName: 'Jiridih', State: '' },
                    { CityCode: 'HO77', CityName: 'JORHAT', State: 'HO5' },
                    { CityCode: 'HO18', CityName: 'Kalaamb', State: '' },
                    { CityCode: 'HO69', CityName: 'Kamrup', State: 'HO5' },
                    { CityCode: 'HO90', CityName: 'KHARAGPUR', State: 'HO36' },
                    { CityCode: 'HO32', CityName: 'KHAT-KHATI, KARBI ANGLONG', State: 'HO5' },
                    { CityCode: 'HO86', CityName: 'KHULNA', State: 'HO38' },
                    { CityCode: 'HO24', CityName: 'KISHANGANJ', State: 'HO6' },
                    { CityCode: 'HO59', CityName: 'Kolapur', State: '' },
                    { CityCode: 'HO2', CityName: 'Kolkata', State: 'HO36' },
                    { CityCode: 'HO51', CityName: 'Lucknow', State: 'HO35' },
                    { CityCode: 'HO84', CityName: 'MADHYAMGRAM', State: 'HO36' },
                    { CityCode: 'HO39', CityName: 'MALDA', State: 'HO36' },
                    { CityCode: 'HO21', CityName: 'Mangaldoi', State: 'HO5' },
                    { CityCode: 'HO34', CityName: 'MATIGHARA', State: '' },
                    { CityCode: 'HO22', CityName: 'MEGHALAYA', State: 'HO24' },
                    { CityCode: 'HO41', CityName: 'Midnapur', State: 'HO36' },
                    { CityCode: 'HO13', CityName: 'Mohali', State: '' },
                    { CityCode: 'HO9', CityName: 'Moradabad', State: 'HO35' },
                    { CityCode: 'HO36', CityName: 'MORANJANA', State: 'HO5' },
                    { CityCode: 'HO44', CityName: 'MUMBAI', State: 'HO22' },
                    { CityCode: 'HO95', CityName: 'NADIA', State: 'HO36' },
                    { CityCode: 'HO65', CityName: 'Nagaon', State: '' },
                    { CityCode: 'HO72', CityName: 'Nagpur', State: 'HO22' },
                    { CityCode: 'HO63', CityName: 'NAVDEEP', State: '' },
                    { CityCode: 'HO5', CityName: 'New Delhi', State: '' },
                    { CityCode: 'HO26', CityName: 'NOIDA', State: '' },
                    { CityCode: 'HO82', CityName: 'PASCHIM MEDINIPUR', State: 'HO36' },
                    { CityCode: 'HO19', CityName: 'Patna', State: 'HO6' },
                    { CityCode: 'HO93', CityName: 'PURBA MEDINIPUR', State: 'HO36' },
                    { CityCode: 'HO73', CityName: 'Ranchi', State: 'HO17' },
                    { CityCode: 'HO47', CityName: 'Rangia', State: 'HO5' },
                    { CityCode: 'HO71', CityName: 'Samtse Bhutan', State: '' },
                    { CityCode: 'HO96', CityName: 'SARANI', State: 'HO36' },
                    { CityCode: 'HO48', CityName: 'SIHODIH,GIRIDIH', State: 'HO17' },
                    { CityCode: 'HO20', CityName: 'Sikkim', State: 'HO31' },
                    { CityCode: 'HO17', CityName: 'Silchar', State: 'HO5' },
                    { CityCode: 'HO37', CityName: 'SILIGURI', State: 'HO36' },
                    { CityCode: 'HO78', CityName: 'SONAPUR', State: 'HO5' },
                    { CityCode: 'HO98', CityName: 'SONARPUR', State: 'HO36' },
                    { CityCode: 'HO35', CityName: 'SONITPUR', State: '' },
                    { CityCode: 'HO3', CityName: 'Tejpur', State: 'HO5' },
                    { CityCode: 'HO66', CityName: 'Tinsukia', State: 'HO5' },
                    { CityCode: 'HO67', CityName: 'Vaishali', State: 'HO6' },
                    { CityCode: 'HO80', CityName: 'VAPI', State: 'HO13' },
                    { CityCode: 'HO27', CityName: 'VARANASI', State: 'HO35' },
                ]
            case 'item_list':
                return [
                    { SearchCode: 'HO3783', Name: 'Kraft Paper (LGB)', ManualCode: '5248', SKU: 'Kg.', SecondryUnit: '', ConversionRate: '0', Varity: '', GSM: '', GSMCode: '', SizeLength: '', SizeWidth: '', ItemID: '', BFCode: '', BFName: '', Grain: '' },
                    { SearchCode: 'HO3781', Name: 'Kraft Paper (LGK)', ManualCode: '5246', SKU: 'Kg.', SecondryUnit: 'MT', ConversionRate: '1000', Varity: '', GSM: '80  ', GSMCode: 'HO3', SizeLength: '', SizeWidth: '', ItemID: '', BFCode: '', BFName: '', Grain: '' },
                    { SearchCode: 'HO1', Name: 'Kraft Paper (NS)', ManualCode: '1', SKU: 'Kg.', SecondryUnit: '', ConversionRate: '0', Varity: '', GSM: '', GSMCode: '', SizeLength: '', SizeWidth: '', ItemID: '', BFCode: '', BFName: '', Grain: '' },
                    { SearchCode: 'HO2', Name: 'Kraft Paper (SG)', ManualCode: '2', SKU: 'Kg.', SecondryUnit: '', ConversionRate: '0', Varity: '', GSM: '', GSMCode: '', SizeLength: '', SizeWidth: '', ItemID: '', BFCode: '', BFName: '', Grain: '' },
                    { SearchCode: 'HO3782', Name: 'RED PAPER', ManualCode: '5247', SKU: 'Kg.', SecondryUnit: '', ConversionRate: '0', Varity: '', GSM: '', GSMCode: '', SizeLength: '', SizeWidth: '', ItemID: '', BFCode: '', BFName: '', Grain: '' },
                ]
            case 'bf_list':
                return [
                    { SearchCode: 'HO9', Name: '14' },
                    { SearchCode: 'HO1', Name: '16' },
                    { SearchCode: 'HO28', Name: '17' },
                    { SearchCode: 'HO2', Name: '18' },
                    { SearchCode: 'HO3', Name: '20' },
                    { SearchCode: 'HO22', Name: '21' },
                    { SearchCode: 'HO4', Name: '22' },
                    { SearchCode: 'HO12', Name: '24' },
                    { SearchCode: 'HO5', Name: '25' },
                    { SearchCode: 'HO25', Name: '26' },
                    { SearchCode: 'HO26', Name: '27' },
                    { SearchCode: 'HO6', Name: '28' },
                    { SearchCode: 'HO27', Name: '29' },
                    { SearchCode: 'HO7', Name: '30' },
                    { SearchCode: 'HO8', Name: '32' },
                    { SearchCode: 'HO29', Name: '33' },
                    { SearchCode: 'HO20', Name: '34' },
                    { SearchCode: 'HO21', Name: '36' },
                    { SearchCode: 'HO23', Name: 'HRCT' },
                    { SearchCode: 'HO24', Name: 'POWER' },
                ]
            case 'unit_list':
                return [
                    { Name: 'MM', Code: 'MM' },
                    { Name: 'Inch', Code: 'Inch' },
                    { Name: 'CM', Code: 'CM' },
                ]
            case 'grain_list':
                return [
                    { Name: 'Long', Code: 'Long' },
                    { Name: 'Short', Code: 'Short' },
                ]
            case 'gsm_list':
                return [
                    { SearchCode: 'HO1', Name: '70' },
                    { SearchCode: 'HO34', Name: '75' },
                    { SearchCode: 'HO3', Name: '80' },
                    { SearchCode: 'HO5', Name: '90' },
                    { SearchCode: 'HO27', Name: '95' },
                    { SearchCode: 'HO7', Name: '100' },
                    { SearchCode: 'HO26', Name: '110' },
                    { SearchCode: 'HO30', Name: '115' },
                    { SearchCode: 'HO10', Name: '120' },
                    { SearchCode: 'HO38', Name: '125' },
                    { SearchCode: 'HO32', Name: '130' },
                    { SearchCode: 'HO31', Name: '135' },
                    { SearchCode: 'HO13', Name: '140' },
                    { SearchCode: 'HO28', Name: '145' },
                    { SearchCode: 'HO14', Name: '150' },
                    { SearchCode: 'HO33', Name: '155' },
                    { SearchCode: 'HO19', Name: '160' },
                    { SearchCode: 'HO36', Name: '165' },
                    { SearchCode: 'HO16', Name: '170' },
                    { SearchCode: 'HO35', Name: '175' },
                    { SearchCode: 'HO18', Name: '180' },
                    { SearchCode: 'HO37', Name: '185' },
                    { SearchCode: 'HO29', Name: '190' },
                    { SearchCode: 'HO20', Name: '200' },
                    { SearchCode: 'HO23', Name: '210' },
                    { SearchCode: 'HO25', Name: '220' },
                    { SearchCode: 'HO24', Name: '230' },
                ]
            default: {
                return {};
            }
        }
    }
    // retrive udl when component loads
    useEffect(() => {
        getdata();
    },[]);

    return staticdata;

}
export default GetStaticListData
