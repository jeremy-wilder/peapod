/*! Peapod v<%= package.version %>
 *  Copyright Audentio <%= package.year %>
 *  LICENSE: <%= package.licence %>
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Pod_Styler from '../styler.js';
var Wrapper = require('../wrapper.jsx')


var External = React.createClass({

  render: function() {
    return <div />;
  },
  componentDidMount: function() {
      var node = ReactDOM.findDOMNode(this);
      var ele = document.getElementById(this.props.getID);
      if (typeof(ele) !== 'undefined') {
        node.innerHTML = document.getElementById(this.props.getID).innerHTML;
        ele.style.display = 'none';
      }
  }

});

module.exports = Wrapper(External);