import React from "react";
import styled from "styled-components";
import logo from "../../style/logo.svg";

const Logo = styled.img`
  margin: auto;
  display: block;
  width: 300px;
  padding: 70px 0 20%;
  z-index: auto;
  position: relative;
`;

export const VVLogo = () => <div><Logo src={logo} alt="VisualVest" /></div>;
