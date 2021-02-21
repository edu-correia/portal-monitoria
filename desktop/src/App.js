import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage';
import Clipboard from './pages/Clipboard';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/clipboard" component={Clipboard} />
        </Switch>
    </Router>
  );
}

export default App;