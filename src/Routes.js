import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Vaccine from "./pages/Vaccine";
import About from "./pages/About";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Dashboard />
            </Route>
            <Route path="/vaccine">
                <Vaccine />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="*">
                <div>404 Not Found!</div>
            </Route>
        </Switch>
    );
};

export default Routes;
