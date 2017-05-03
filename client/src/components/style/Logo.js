import React from "react";
import styled from "styled-components";
import logo from "../../style/logo.svg";

const Logo = styled.img`
  margin: auto;
  display: block;
  width: 155px;
  height: 60px;
  padding: 17px 0 0 0;
  z-index: auto;
  position: relative;
`;

export const VVLogo = () => <div><Logo src={logo} alt="VisualVest" /></div>;
