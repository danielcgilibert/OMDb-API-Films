import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { Login } from "../pages/Login";

export const AppRouter = () => {
  const [login, setLogin] = useState({ usuario: {}, loggin: false });
  const [checking, setChecking] = useState(true);

  if (login.loggin) {
    return (
      <Router>
        <Switch>
          <Route exact path="/details/:id" component={Details} />
          <Route path="/home"  >
              <Home login={login} setLogin={setLogin} />
         </Route>
          <Redirect to="/home" />
        </Switch>
      </Router>
    );
  } else {
    return (
      <Router>
        <Switch>
          <Route path="/login" > 
          <Login login={login} setLogin={setLogin} />
          </Route>
          <Redirect to="/login" />
        </Switch>
      </Router>
    );
  }
  // return (
  //     <Router>

  //         <Switch>
  //             <PublicRoute  path="/login"  login={login} isAuthenticated={setLogin} />
  //             <PrivateRoute path="/" isAuthenticated={login} />
  //             <Redirect to="/login" />
  //         </Switch>

  //     </Router>
  // )
};
