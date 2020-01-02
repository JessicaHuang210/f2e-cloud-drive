import React, { Component } from "react";
import styled from "styled-components";

import {
  linkTextColor,
  fsNormal,
  sidebarWidth,
  device,
  transitionSlow
} from "utils/variables";

import Router from "router";

const MainC = styled.main`
  padding: 4rem;
  color: ${linkTextColor};
  width: 100%;
  margin-left: ${sidebarWidth};
  transition: ${transitionSlow} 0.1s;
  @media ${device.unLaptop} {
    margin-left: 0;
  }
`;

const BreadcrumbsC = styled.div`
  display: flex;
  align-items: center;
  font-size: ${fsNormal};
  margin-bottom: 4rem;
  > span {
    margin-right: 0.5rem;
  }
`;
const BreadcrumbsRootC = styled.span`
  font-size: 2rem;
  opacity: 0.5;
`;
const BreadcrumbsRootIconC = styled.span`
  opacity: 0.5;
`;
const BreadcrumbsItemC = styled.a`
  display: block;
`;

export default class Main extends Component {
  render() {
    return (
      <MainC>
        <BreadcrumbsC>
          <BreadcrumbsRootC>我的雲端硬碟</BreadcrumbsRootC>
          <BreadcrumbsRootIconC>&#9658;</BreadcrumbsRootIconC>
          <BreadcrumbsItemC>The F2E 2nd UI 設計資源</BreadcrumbsItemC>
        </BreadcrumbsC>
        <Router />
      </MainC>
    );
  }
}
