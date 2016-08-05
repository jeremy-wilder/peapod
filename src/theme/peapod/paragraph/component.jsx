/* Copyright <%= package.year %>, Audentio, LLC.
* All rights reserved.
*
* LICENSE: <%= package.licence %>
*/

import React from 'react';
import Pod_Styler from 'utility/styler.js';

module.exports = componentName => class Pod_Component extends React.Component {

    static displayName = componentName;

    static propTypes = {
        children: React.PropTypes.any,
    }

    render() {
        const classes = Pod_Styler.getClassStyle(this);

        return (
            <div>
                <p className={classes.main}>
                    {this.props.children}
                </p>
            </div>
        );
    }
};
