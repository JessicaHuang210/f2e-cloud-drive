import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { sidebarBgColor, device } from "utils/variables";

const CardGalleryC = styled.section``;
const CardTitleC = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;
const CardsC = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 4rem;
`;

const CardItemC = styled.div`
  background-color: ${sidebarBgColor};
  padding: 1.5rem;
  min-height: 9rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: flex-end;
  margin-bottom: 2rem;
  @media ${device.mobileL} {
    width: 49%;
    &:not(:nth-child(2n)) {
      margin-right: 2%;
    }
  }
  @media ${device.tablet} {
    width: 32%;
    &:not(:nth-child(2n)) {
      margin-right: 0%;
    }
    &:not(:nth-child(3n)) {
      margin-right: 2%;
    }
  }
`;

const CardImgC = styled.img``;
export default class CardGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
    children: PropTypes.node
  };

  static defaultProps = {
    title: "",
    data: [],
    children: null
  };
  render() {
    const { title, data, children } = this.props;
    return (
      <CardGalleryC>
        <CardTitleC>{title}</CardTitleC>
        <CardsC>
          {data.map(i => {
            return (
              <CardItemC key={i.key}>
                <CardImgC />
                <span>{i.name}</span>
              </CardItemC>
            );
          })}
        </CardsC>
        {children}
      </CardGalleryC>
    );
  }
}
