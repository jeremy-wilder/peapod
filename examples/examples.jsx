import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Sections from './sections.jsx';

import DamionDev from './pages/damionDev.jsx';
import KylerDev from './pages/kylerDev.jsx';
import TusharDev from './pages/tusharDev.jsx';

import Demo from './pages/demo.jsx';

import SingleComponent from './pages/singleComponent.jsx';

render((
    <Router history={browserHistory}>
        <Route path="/" component={Sections} />
        <Route path="/damion" component={DamionDev} />
        <Route path="/kyler" component={KylerDev} />
        <Route path="/tushar" component={TusharDev} />
        <Route path="/demo" component={Demo} />

        <Route path="/:componentName" component={SingleComponent} />
    </Router>
), document.getElementById('mainContainer'));
