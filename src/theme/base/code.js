import {Sheet} from '../../stylesheet.js';

var sheet = new Sheet('code'),
	main = sheet.addMain();

//Conditions

//Variables
sheet.setValues({});

main.addSelector({
	common: {
        backgroundColor: '$palette.blue50',
        color: '$palette.blue700',
        padding: '1px 2px',
        fontSize: '85%',
		fontFamily: '$font.family.code'
	}
})

module.exports = sheet;