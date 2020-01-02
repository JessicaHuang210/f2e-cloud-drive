import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routerList from "./data";
// import Home from "pages/Home";
const BasicRoute = () => (
  <Router>
    <Switch>
      {routerList.map(i => {
        return <Route key={i.path} path={i.path} component={i.component} />;
      })}
    </Switch>
  </Router>
);

export default BasicRoute;
