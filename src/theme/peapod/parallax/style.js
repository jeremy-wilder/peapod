import { Sheet } from 'utility/stylesheet.js';

module.exports = function (sheetName) {
    var sheet = new Sheet(sheetName),
        main = sheet.addMain(),
        front = sheet.addPart('front'),
        back = sheet.addPart('back');

    // Conditions
    // Variables
    sheet.setValues({
        height: '100vh',
        width: '100%',
    });

    main.addSelector({
        common: {
            height: '$parallax.height',
            width: '$parallax.width',
            overflow: 'hidden',
            position: 'relative',
            zIndex: '$zIndex.level0',
        },
    });
    front.addSelector({
        common: {
            height: `calc( ${Pod_Vars.get('parallax.height')} * 2)`,
            width: '$parallax.width',
            position: 'absolute',
            zIndex: '$zIndex.level0',
            top: 0, left: 0,
            transform: '',
            willChange: 'transform',
        },
    });
    back.addSelector({
        common: {
            height: 'calc( ' + Pod_Vars.get('parallax.height') + ' * 2)',
            width: '$parallax.width',
            position: 'absolute',
            zIndex: '$zIndex.level0',
            top: 0, left: 0,
            transform: '',
            willChange: 'transform',
        },
    });

    return sheet;
};
