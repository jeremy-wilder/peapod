/* Copyright <%= package.year %>, Audentio, LLC.
* All rights reserved.
*
* LICENSE: <%= package.licence %>
*/


// Dependencies
import React from 'react';
import Pod_Styler from 'utility/styler.js';
import { Heading } from 'utility/components.js'

/**
* Card component
* @element Code
*/
module.exports = componentName => class Pod_Component extends React.Component {


    static displayName = componentName;

    static defaultProps = {
        title: false,
        actionBar: false,
        actionBarLocation: 'bottom'
    }

    render() {
        var style = Pod_Styler.getStyle(this);

        var objectCheck = new Object(this.props);

        var titleElement = (typeof objectCheck.title === "string") ?
        (<Heading kind="h4" styler={{secondary:true}}>{this.props.title}</Heading>) :
        objectCheck.title;

        var title = (objectCheck.title) ? (
            <div style={style.title}>
                {titleElement}
            </div>
        ) : '';

        var actionBar = (objectCheck.actionBar) ? (
            <div style={style.actionBar}>
                {this.props.actionBar}
            </div>
        ) : '';

        var actionBarTop = '';
        if (this.props.actionBarLocation != 'bottom') {
            actionBarTop = actionBar;
            actionBar = '';
        }

        return (
            <div style={style.main} {...this.props}>
                {actionBarTop}
                {title}

                <div style={style.content}>{this.props.children}</div>

                {actionBar}
            </div>
        );
    }

};
