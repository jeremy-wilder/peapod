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
* Template component
*
* @element Pod_modal
*
*/
class FixedElement extends React.Component {

    constructor() {
        super();
        this.state = {
            position: 'static',
            origionalHeight: 0
        }
    }

    componentDidMount() {
        var element = this.fixedElem
        var elemRect = element.getBoundingClientRect()

        this.origionalPosition = elemRect.top  + window.scrollY
        this.setState({
            origionalHeight: element.scrollHeight
        })

        document.addEventListener("scroll", () => {
            var element = this.fixedElem
            var elemRect = element.getBoundingClientRect()

            this.origionalPosition = elemRect.top  + window.scrollY
            var doc = document.documentElement;
            var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

            var positionStyle =
                (top > this.origionalPosition) ?
                'fixed' :
                'static';

            this.setState({
                position: positionStyle
            })
        });
    }

    render() {
        var style = Pod_Styler.getStyle(this);
        style.main['position'] = this.state.position

        var fixedStyle = {
            height: this.state.origionalHeight,
            // transform: 'translate3d(0, 0, 0)'
        }

        if (this.props.onScroll) {
            return (
                <div style={fixedStyle} ref={(ref) => this.fixedElem = ref}>
                    <div style={style.main} >
                        {this.props.children}
                    </div>
                </div>
            );
        } else {
            return (
                <div style={style.main}>
                    {this.props.children}
                </div>
            )
        }
    }
};

FixedElement.defaultProps = {
    onScroll: true
};

module.exports = Wrapper(FixedElement);
