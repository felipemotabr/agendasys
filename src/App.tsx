import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import ResponsiveStyles from './styles/reponsive';

import Login from './components/Login'
import Home from './components/Home';
import Schedule from './components/Schedule'
import Result from './components/Schedule/Result'
import CurrentCode from './components/CurrentCode'
import Calendar from './components/Calendar'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/currentcode" component={CurrentCode} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/schedule/result" component={Result} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/" component={Login} />
      </Switch>
      <GlobalStyles />
      <ResponsiveStyles />
    </Router>
  );
}

export default App;
