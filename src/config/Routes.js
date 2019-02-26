import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Auth from '../pages/Auth';

export default ( props ) => {
  return (
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/login" exact component={Auth} />
      <Route path="/home" exact component={Home} />
      <Redirect to="/home" />
    </Switch>
  )
};
//
// <Route
//   path="/home"
//   render={props => <Home {...props} />}
// />
