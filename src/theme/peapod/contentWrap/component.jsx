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
* ContentWrap component
* @element Code
*/
class ContentWrap extends React.Component {

    render() {
        var style = Pod_Styler.getStyle(this);

        return(
            <div style={style.main}>
                {this.props.children}
            </div>
        )

    }

};

module.exports = Wrapper(ContentWrap);
