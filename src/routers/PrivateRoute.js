import React from 'react'

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';

import { BrowserRouter as  Redirect, Switch, Route} from "react-router-dom";

export const PrivateRoute = ({isAuthenticated}) => {
    if(isAuthenticated){

        return (
            <Switch>
                
                <Route exact path="/details/:id" component={Details} />
                <Route path="/" component={Home} />
                <Redirect to="/" />
    
            </Switch>
    
    
            )
    }else{
        <Redirect to="/login" />

    }
}
