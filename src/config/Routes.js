import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Auth from "../pages/Auth";
import Logout from "../pages/Logout";
import Add from "../pages/Add";
import ViewDeckNew from "../pages/ViewDeckNew";
import ViewUserProfile from '../pages/ViewUserProfile'

export default props => {
  // console.log("routesProps = ", props, "\n");

  return (
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/auth" exact component={Auth} />
      <Route path="/home" exact component={Home} />
      <Route path="/logout" exact component={Logout} />
      <Route path="/add" exact component={Add} />
      <Route path="/view-deck/:id" exact component={ViewDeckNew} />
      <Route path="/view-user/:id" exact component={ViewUserProfile} />
      <Redirect to="/auth" />
    </Switch>
  );
};

//
// <Route
//   path="/home"
//   render={props => <Home {...props} />}
// />
