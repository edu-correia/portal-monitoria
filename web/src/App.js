import {useContext} from 'react';
import {Router, Switch, Route, Redirect} from 'react-router-dom';

import {AuthProvider, Context} from './Context/AuthContext';

import LandingPage from './pages/LandingPage';
import Topic from './pages/Topic';
import SpecificTopic from './pages/SpecificTopic';
import Courses from './pages/Courses';
import ChatBot from './pages/ChatBot';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NotFoundPage from './pages/NotFoundPage';

import history from './history';

import './global.css';

function CustomRoute({isPrivate, ...rest}) {
  const {authenticated, loading} = useContext(Context);

  if(loading){
    return(
        <h1>Loading...</h1>
    )
  }

  if(isPrivate && !authenticated){
    return <Redirect to="/login"/>
  }

  return <Route {...rest}/>
}

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/topic/:course" component={Topic} />
          <Route path="/specific-topic/:id" component={SpecificTopic} />
          <Route path="/courses" component={Courses} />
          <Route path="/chatbot" component={ChatBot} />
          <CustomRoute path="/login" component={Login} />
          <CustomRoute isPrivate path="/dashboard" component={Dashboard} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;