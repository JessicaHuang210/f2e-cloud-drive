import React, { PureComponent } from "react";
import styled from "styled-components";
import { darken } from "polished";
import {
  primaryColor,
  btnTextColor,
  fsNormal,
  transitionNormal
} from "utils/variables";
const UploadBtnC = styled.button`
  background-color: ${primaryColor};
  color: ${btnTextColor};
  display: block;
  width: 100%;
  border-radius: 5rem;
  padding: 1rem 1.5rem;
  cursor: pointer;
  font-size: ${fsNormal};
  transition: ${transitionNormal};
  &:hover {
    background-color: ${darken(0.1, primaryColor)};
  }
`;
export default class UploadBtn extends PureComponent {
  render() {
    return <UploadBtnC>上傳檔案</UploadBtnC>;
  }
}
