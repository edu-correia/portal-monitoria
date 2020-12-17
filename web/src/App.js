import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Topic from './pages/Topic'
import SpecificTopic from './pages/SpecificTopic'
import Courses from './pages/Courses'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/topics" component={Topic} />
        <Route path="/specific-topic" component={SpecificTopic} />
        <Route path="/courses" component={Courses} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;