import React from "react";
import { View, Image } from "react-vr";
import styled from "styled-components";
import logo from "../../style/logo.jpg";

const Logo = styled(Image)`
  margin: auto;
  display: block;
  width: 155px;
  height: 60px;
  padding: 17px 0 0 0;
  z-index: auto;
  position: relative;
`;

export const VVLogo = () => (
  <Image source={logo} />
);
