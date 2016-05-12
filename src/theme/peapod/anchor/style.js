import {Sheet} from 'stylesheet.js';

module.exports = function(sheetName) {
	var sheet = new Sheet(sheetName),
		main = sheet.addMain();

	//Conditions

	//Variables
	sheet.setValues({
		color: {
			base: '$color.primary.base',
			hover: '$color.primary.hover',
			active: '$color.primary.active'
		}
	});


	main.addSelector({
		common: {
			color: '$anchor.color.base',
			textDecoration: 'none',

			':hover': {
				color: '$anchor.color.hover'
			},

			':active': {
				color: '$anchor.color.active'
			}
		}
	});

	return sheet;
}