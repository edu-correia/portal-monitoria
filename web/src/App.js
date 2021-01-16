import {BrowserRouter, Switch, Route} from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Topic from './pages/Topic';
import SpecificTopic from './pages/SpecificTopic';
import Courses from './pages/Courses';
import ChatBot from './pages/ChatBot';

import './global.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/topic/:course" component={Topic} />
        <Route path="/specific-topic/:id" component={SpecificTopic} />
        <Route path="/courses" component={Courses} />
        <Route path="/chatbot" component={ChatBot} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;