import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';

export default ( props ) => {
  return (
    <Switch>
      <Route path="/about" component={About} />
      <Route
        path="/home"
        render={props => <Home {...props} />}
      />
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  )
};
