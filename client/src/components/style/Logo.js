import React from "react";
import styled from "styled-components";
import logo from "../../style/logo.svg";

const Logo = styled.img`
  margin: auto;
  display: block;
  width: 155px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const VVLogo = () => <div><Logo src={logo} alt="VisualVest" /></div>;
