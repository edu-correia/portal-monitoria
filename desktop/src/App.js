import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" component={LandingPage} />
        </Switch>
    </Router>
  );
}

export default App;