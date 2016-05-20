import radium from 'radium';
import React, { Component } from 'react';
import Lazy from 'theme/peapod/lazy/component.jsx';

const enhance = ComposedComponent => class extends Component {
    constructor(...args) {
        super(...args);
        this.state = this.state || {};
    }

    componentDidMount() {
        ComposedComponent.contextTypes = { // eslint-disable-line
            _podPaneWidth: React.PropTypes.number,
        };
    }

    render() {
        const component = <ComposedComponent {...this.props} />;
        console.log(Lazy);
        const wrapped = (this.props.lazy) ?
            <Lazy>{component}</Lazy> :
            component;

        return wrapped;
    }
};

const Pod_Wrapper = function wrap(NewComponent) {
    return enhance(radium(NewComponent));
};

module.exports = Pod_Wrapper;
