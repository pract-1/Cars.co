import React from "react";
import { Route, Switch } from "react-router-dom";
import Inventory from "./component/Inventory/Inventory";
import Home from "./component/Home/Home";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/inventory" component={Inventory} />
  </Switch>
);
