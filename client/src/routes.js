// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';

import Home from './components/home';
import Authenticated from './components/authenticated';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Home} />
    <Route path="/authenticated" component={Authenticated} />
  </Router>
);

export default Routes;