import React, { ReactElement } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Authorization from "components/Authorization/Authorization";
import ServerDisplay from "components/ServerDisplay/ServerDisplay";
import { useAppSelector } from "store/hooks";

export const Routing = (): ReactElement => {

  const hasToken = useAppSelector((state) => state.tokens?.hasToken)
  
  if(hasToken){
    return (
      <Router>
        <Switch>
          <Route path='/' component={ServerDisplay} />
        </Switch>
      </Router>
    )
  }

  return (
  <Router>
    <Switch>
       <Route path='/login' component={Authorization} />
    </Switch>
  </Router>
)}

export default Routing