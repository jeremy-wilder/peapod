import { Sheet } from 'utility/stylesheet.js';

module.exports = function (sheetName) {
    const sheet = new Sheet(sheetName);
    const main = sheet.addMain();

    // Conditions
    sheet.addCondition('cover').addStyler({ cover: true });
    sheet.addCondition('contain').addStyler({ contain: true });

    main.addSelector({
        common: {
            display: 'block',
            width: '100%',
            height: '100vh',
            backgroundPosition: 'center center',
        },
    }).addSelector({
        condition: ['cover'],
        common: {
            backgroundSize: 'cover',
        },
    }).addSelector({
        condition: ['contain'],
        common: {
            backgroundSize: 'contain',
        },
    });

    return sheet;
};
