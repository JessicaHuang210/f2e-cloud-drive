import React, { Component } from "react";
import styled from "styled-components";
import {
  sidebarBgColor,
  linkTextColor,
  transitionNormal,
  fsNormal,
  sidebarWidth,
  device,
  transitionSlow
} from "utils/variables";
import { lighten } from "polished";
import logo from "assets/logo.svg";
import cloudMonster from "assets/Cloud-monster.svg";
import UploadBtn from "components/UploadBtn";
const SidebarC = styled.header`
  width: ${sidebarWidth};
  padding: 4rem 3rem;
  position: fixed;
  overflow: hidden;
  top: 0;
  bottom: 0;
  font-size: ${fsNormal};
  transition: ${transitionSlow};
  @media ${device.unLaptop} {
    transform: translateX(-100%);
  }
  &:before {
    content: "";
    background: ${sidebarBgColor} url(${cloudMonster}) no-repeat left bottom;
    background-size: contain;
    position: absolute;
    width: 200%;
    height: 200%;
    bottom: -15%;
    left: -30%;
    z-index: -1;
    transform: rotate(10deg);
  }
`;
const LogoC = styled.img`
  margin: 0 auto 4rem auto;
  display: block;
`;
const NavC = styled.nav`
  margin: 4rem auto;
  color: ${linkTextColor};
`;
const NavItemC = styled.a`
  display: block;
  padding: 1.2rem 2rem;
  transition: ${transitionNormal};
  border-radius: 5rem;
  &:hover {
    background-color: ${lighten(0.1, sidebarBgColor)};
  }
`;

export default class Sidebar extends Component {
  state = {
    menuList: [
      { key: 1, name: "上傳資料夾" },
      { key: 2, name: "新資料夾" },
      { key: 3, name: "共享資料夾" },
      { key: 4, name: "已標記星號" },
      { key: 5, name: "垃圾桶" }
    ]
  };
  render() {
    const { menuList } = this.state;
    return (
      <SidebarC>
        <LogoC src={logo} alt="logo" />
        <UploadBtn />
        <NavC>
          {menuList.map(i => {
            return <NavItemC key={i.key}>{i.name}</NavItemC>;
          })}
        </NavC>
      </SidebarC>
    );
  }
}
