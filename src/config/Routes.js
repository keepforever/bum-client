import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Auth from '../pages/Auth';
import Logout from '../pages/Logout'

export default ( props ) => {
  console.log('routesProps = ', props, '\n' )
  return (
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/login" exact component={Auth} />
      <Route path="/home" exact component={Home} />
      <Route path="/logout" exact component={Logout} />
      <Redirect to="/home" />
    </Switch>
  )
};
//
// <Route
//   path="/home"
//   render={props => <Home {...props} />}
// />
