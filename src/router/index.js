import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "pages/Home";
import Trash from "pages/Trash";

const BasicRoute = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Trash" component={Trash} />
    </Switch>
  </Router>
);

export default BasicRoute;
