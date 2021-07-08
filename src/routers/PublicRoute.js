import React from "react";
import { BrowserRouter as Redirect, Switch, Route } from "react-router-dom";
import { Login } from "../pages/Login";

export const PublicRoute = ({ isAuthenticated }) => {
    console.log(isAuthenticated);
  return (
    <Switch>
      <Route
        path="/login"
        component={(props) =>
          isAuthenticated.loggin ? <Redirect to="/" /> : <Login {...props} />
        }
      />
      {/* <Redirect to="/login" /> */}
    </Switch>
  );
};
