import React, { ReactElement } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

export const Routing = (): ReactElement => (
  <Router>
    <Switch>
      {/* <Route path='/login' component={Authorization} /> */}
      {/* <Route path='/' component={ServerDisplay} /> */}
      {/* <Redirect to="/*" component={ServerDisplay} /> */}
    </Switch>
  </Router>
)

export default Routing