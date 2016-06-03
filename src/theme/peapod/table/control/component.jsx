/*! Peapod v<%= package.version %>
*  Copyright Audentio <%= package.year %>
*  LICENSE: <%= package.licence %>
*/

import React from 'react';
import Pod_Styler from 'utility/styler.js';
// import PureRender from 'utility/pureRender.js';

module.exports = componentName => class Pod_Component extends React.Component {

    static displayName = componentName;

    // shouldComponentUpdate = PureRender;

    static propTypes = {
        children: React.PropTypes.any,
    }

    render() {
        const style = Pod_Styler.getStyle(this);

        return (
            <div style={style.main}>
                {this.props.children}
            </div>
        );
    }
};
