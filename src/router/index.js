import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "pages/Home";
import Trash from "pages/Trash";

const BasicRoute = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/Trash" component={Trash} />
  </Switch>
);

export default BasicRoute;
