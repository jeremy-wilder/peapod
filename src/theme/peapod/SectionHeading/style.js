module.exports = function (sheet) {
    const main = sheet.addMain();

    sheet.resolveValues = theme => { // eslint-disable-line no-unused-vars
        const component = {};
        return component;
    };

    sheet.resolveStyles = (component, theme) => { // eslint-disable-line no-unused-vars
        main.addSelector({
            common: {
                marginBottom(obj) {
                    return obj.props.margin || theme.sitespcaing.medium;
                },
            },
        });
    };

    return sheet;
};
