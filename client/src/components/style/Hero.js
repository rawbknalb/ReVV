import React from "react";
import { VVLogo } from "./Logo";
import styled from "styled-components";

export const HeroHeader = styled.header`
  position: relative;
  height: auto;
  overflow: hidden;
`;

export const HeaderH1 = styled.h1`
  position: relative;
  color: white;
  margin: 0;
  font: 44px
  text-align: center;
`;

export const HeaderDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#ff9d2f, #ff6126);
  transform: skewY(-10deg);
  transform-origin: top left;
  z-index: auto;
  box-shadow: 5px 5px 20px rgba(0,0,0,0.25);
`;

const Hero = () => (
  <HeroHeader>
    <HeaderDiv />
    <VVLogo />
  </HeroHeader>
);

export default Hero;
