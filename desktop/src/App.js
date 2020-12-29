import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage';
import AddTopic from './pages/AddTopic';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/add-topic" component={AddTopic} />
        </Switch>
    </Router>
  );
}

export default App;