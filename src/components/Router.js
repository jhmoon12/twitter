import React, { useState } from "react";
import { HashRouter as Router,Route,Switch } from "react-router-dom";
import Home from "../routes/Home";
import Auth from "../routes/Auth";

const AppRouter = () => {
const [isLoggedin, setIsLoggedin ] = useState(true);
return (
<Router>
    <Switch>
        {isLoggedin? 
        <>
        <Route>
            <Home exact path="/"/>
        </Route>
        </> 
        : 
        <>
        <Route>
            <Auth exact path="/"/>
        </Route>
        </> }
    </Switch>
</Router>
);
};

export default AppRouter;