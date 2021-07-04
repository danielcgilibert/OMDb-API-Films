import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
  
import { Details } from '../pages/Details';
import { Home } from '../pages/Home';

export const AppRouter = () => {
    return (
        <Router>

            <Switch>
                <Route exact path="/details/:id" component={Details} />
                <Route path="/" component={Home} />
                <Redirect to="/" />
            </Switch>
            
        </Router>
    )
}
