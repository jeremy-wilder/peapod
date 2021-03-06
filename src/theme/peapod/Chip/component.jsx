/* Copyright <%= package.year %>, Audentio, LLC.
* All rights reserved.
*
* LICENSE: <%= package.licence %>
*/


// Dependencies
import React from 'react';
import Styler from 'utility/styler.js';
import { Icon } from 'utility/components.js';

/**
* Card component
* @element Code
*/
module.exports = componentName => class Pod_Component extends React.Component {


    static displayName = componentName;

    static defaultProps = {
        deleteTrigger: false,
        photo: false,
    }

    static propTypes = {
        children: React.PropTypes.any,
        deleteTrigger: React.PropTypes.bool,
        photo: React.PropTypes.oneOfType([
            React.PropTypes.bool,
            React.PropTypes.string,
        ]),
    }

    componentWillMount() {
        this.state = {
            showElement: true,
            hovered: false,
        };

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onMouseEnter() {
        this.setState({ hovered: true });
    }
    onMouseLeave() {
        this.setState({ hovered: false });
    }

    removeChip() {
        this.setState({
            showElement: false,
        });
    }

    render() {
        const classes = Styler.getClasses(this);

        const deleteTrigger = (this.props.deleteTrigger) ? (
            <Icon className={classes.deleteTrigger} onClick={() => { this.removeChip(); }}>close</Icon>
        ) : '';

        const photo = (this.props.photo) ? (
            <img src={this.props.photo} className={classes.photo} alt="" />
        ) : '';

        if (this.state.showElement) {
            return (
                <div className={classes.main} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                    {photo}
                    {deleteTrigger}
                    {this.props.children}
                </div>
            );
        }
        return null;
    }

};
