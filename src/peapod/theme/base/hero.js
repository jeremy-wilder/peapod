import {Sheet} from '../../stylesheet.jsx';

var sheet = new Sheet,
    main = sheet.addMain();

//Conditions
sheet.addCondition('cover').addStyler({cover: true});
sheet.addCondition('contain').addStyler({contain: true});
//Variables

main.addSelector({
    common: {
        display: 'block',
        width: '100vw',
        height: '100vh',
        backgroundPosition: 'center center'
    }
}).addSelector({
    condition: ['cover'],
    common: {
        backgroundSize: 'cover'
    }
}).addSelector({
    condition: ['contain'],
    common: {
        backgroundSize: 'contain'
    }
});

module.exports = sheet;
