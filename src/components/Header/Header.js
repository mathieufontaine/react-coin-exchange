import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "./crypto.png";

const H1 = styled.header`
  font-size: 3rem;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  height: 8rem;
  pointer-events: none;
  margin-right: 1rem;
  animation: ${rotate} infinite 20s linear;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 20vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: white;
`;

class header extends React.Component {
  render() {
    return (
      <Header>
        <Logo src={logo} alt="coin exchange" className="App-logo" />
        <H1>{this.props.name}'s Coin Exchange</H1>
      </Header>
    );
  }
}

export default header;
