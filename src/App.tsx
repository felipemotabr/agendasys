import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';

import Login from './components/Login'
import Home from './components/Home';
import Schedule from './components/Schedule'
import Result from './components/Schedule/Result'
import CurrentCode from './components/CurrentCode'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/currentcode" component={CurrentCode} />
        <Route path="/schedule/result" component={Result} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/" component={Login} />
      </Switch>
      <GlobalStyles />
    </Router>
  );
}

export default App;
