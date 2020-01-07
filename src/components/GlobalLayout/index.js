import React, { PureComponent, Fragment } from "react";
import { ResetStyle, GlobalStyle, Wrap } from "./globalStyle";
import Sidebar from "components/Sidebar";
import Main from "components/Main";
import Login from "pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class GlobalLayout extends PureComponent {
  render() {
    return (
      <Fragment>
        <ResetStyle />
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/Login" component={Login}></Route>
            <Wrap>
              <Sidebar />
              <Main />
            </Wrap>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}
