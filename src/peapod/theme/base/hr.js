import {Sheet} from '../../stylesheet.js';

var sheet = new Sheet,
	main = sheet.addMain();

//Conditions

//Variables

main.addSelector({
	common: {
		height: '1px',
		borderWidth: 0,
		backgroundColor: '$palette.grey200',
		margin: '{$gutter.internal} auto' //in case someone puts a width it will center
	}
})


module.exports = sheet;