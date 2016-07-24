import React, { PropTypes } from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

import Layout from './components/layout/Layout';

import HomePage from './components/pages/HomePage';
import DashboardOne from './components/pages/DashboardOne';
import DashboardTwo from './components/pages/DashboardTwo';
import Widgets from './components/pages/Widgets';
import {
  LevelOnePage,
  LevelTwoPage,
  LevelThreePage,
} from './components/pages/MultiLevelPage';
import LoginPage from './components/pages/LoginPage';
import BlankPage from './components/pages/BlankPage';

const propTypes = {
  store: PropTypes.object,
};


export default function App() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={HomePage} />
        <Route path="dashboard/v1" component={DashboardOne} />
        <Route path="dashboard/v2" component={DashboardTwo} />
        <Route path="widgets" component={Widgets} />
        <Route path="level-one" component={LevelOnePage} />
        <Route path="level-two" component={LevelTwoPage} />
        <Route path="level-three" component={LevelThreePage} />
        <Route path="examples/blank-page" component={BlankPage} />
      </Route>
      <Route path="/login" component={LoginPage} />
    </Router>
  );
}

App.propTypes = propTypes;
