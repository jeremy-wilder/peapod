/*! Peapod v<%= package.version %>
 *  Copyright Audentio <%= package.year %>
 *  LICENSE: <%= package.licence %>
 */

import React from 'react';
import ReactDOM from 'react-dom';
var Pod_Styler = require('../styler.jsx');


var Grid = React.createClass({
	render: function() {
		return (
			<div style={Pod_Styler.getStyle(this)}>
				{this.props.children}
			</div>
		);
	}

});

module.exports = Grid;
