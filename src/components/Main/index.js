import React, { Component } from "react";
import styled from "styled-components";
import {
  linkTextColor,
  fsNormal,
  sidebarWidth,
  device,
  transitionSlow
} from "utils/variables";
import CardGallery from "components/CardGallery";

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
  state = {
    folderData: [
      { key: 1, name: "The F2E Week1 - 番茄鐘" },
      { key: 2, name: "The F2E Week2 - 新接龍" },
      { key: 3, name: "The F2E Week3 - MP3 Player" },
      { key: 4, name: "TThe F2E Week4 - 線上支付" },
      { key: 5, name: "The F2E Week5 - 90 秒挑戰遊戲" },
      { key: 6, name: "The F2E Week6 - 旅館預約服務" },
      { key: 7, name: "The F2E Week7 - 匿名聊天室" },
      { key: 8, name: "The F2E Week8 - 雲端硬碟" }
    ]
  };
  render() {
    const { folderData } = this.state;
    return (
      <MainC>
        <BreadcrumbsC>
          <BreadcrumbsRootC>我的雲端硬碟</BreadcrumbsRootC>
          <BreadcrumbsRootIconC>&#9658;</BreadcrumbsRootIconC>
          <BreadcrumbsItemC>The F2E 2nd UI 設計資源</BreadcrumbsItemC>
        </BreadcrumbsC>
        <CardGallery title="資料夾" data={folderData}></CardGallery>
        <CardGallery title="檔案" data={folderData}></CardGallery>
      </MainC>
    );
  }
}
