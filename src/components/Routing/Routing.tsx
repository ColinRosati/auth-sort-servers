import React, { ReactElement } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Authorization from "components/Authorization/Authorization";
import ServerDisplay from "components/ServerDisplay/ServerDisplay";

export const Routing = (): ReactElement => (
  <Router>
    <Switch>
      <Route path='/login' component={Authorization} />
      <Route path='/' component={ServerDisplay} />
      <Redirect from='/*' to='/' />
    </Switch>
  </Router>
)

export default Routing