import React, { PureComponent, Fragment } from "react";
import { ResetStyle, GlobalStyle, Wrap } from "./globalStyle";
import Sidebar from "components/Sidebar";
import Main from "components/Main";

export default class GlobalLayout extends PureComponent {
  render() {
    return (
      <Fragment>
        <ResetStyle />
        <GlobalStyle />
        <Wrap>
          <Sidebar />
          <Main />
        </Wrap>
      </Fragment>
    );
  }
}
