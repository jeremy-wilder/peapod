/* Copyright <%= package.year %>, Audentio, LLC.
* All rights reserved.
*
* LICENSE: <%= package.licence %>
*/


//Dependencies
import React from 'react';
import Pod_Styler from 'styler.js';
import Wrapper from 'wrapper.jsx';

/**
* ImageContainer component
* @element Code
*/
class Device extends React.Component {

    render() {
        var style = Pod_Styler.getStyle(this);

        var overlay = (this.props.overlay) ? (<div style={style.overlay}></div>): '';

        return (
            <div style={style.main}>
                <div style={style.background}></div>
                <div style={style.innerscreen}>
                    {overlay}
                    <div style={style.scrollable}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );

    }

};

module.exports = Wrapper(Device);
