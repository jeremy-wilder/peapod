/*! Peapod v<%= package.version %>
*  Copyright Audentio <%= package.year %>
*  LICENSE: <%= package.licence %>
*/

import React from 'react';
import Pod_Styler from 'utility/styler.js';

module.exports = componentName => class Pod_Component extends React.Component {

    static displayName = componentName;

    static propTypes = {
        children: React.PropTypes.any,
        varSet: React.PropTypes.any,
    }

    render() {
        const classes = Pod_Styler.getClassStyle(this);

        return (
            <section scene={this.props.scene} className={classes.main}>
                {this.props.children}
            </section>
        );
    }
};
