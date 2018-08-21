import React from "react";
import { Route, Switch } from "react-router-dom";
import Inventory from "./component/Inventory/Inventory";
import Home from "./component/Home/Home";
import LogIn from "./component/LogIn/LogIn";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/inventory" component={Inventory} />
    <Route Path="/login" component={LogIn} />
  </Switch>
);
