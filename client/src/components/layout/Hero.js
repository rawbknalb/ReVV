import React from "react";
import Trend from "react-trend";
import { VVLogo } from "../style/Logo";
import styled from "styled-components";
import Header from "./Header";

const styledHeader = styled(Header)`
  position: relative;
`;

export const HeroHeader = styled.header`
  position: relative;
  height: 500px;
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
  box-shadow: 5px 5px 20px rgba(0,0,0,0.25);
`;

const Div = styled.div`
  margin: auto;
  display: block;
  width: 500px;
  position: relative;
`;

const TrendLine = () => (
  <Div>
    <Trend
      smooth
      autoDraw
      autoDrawDuration={1500}
      autoDrawEasing="ease-out"
      data={[0, 15, 0, 30, 15, 60, 30, 0, 15, 50, 10, 25, 40, 60, 20, 80, 0, 15, 55, 85, 55, 30, 20, 55, 20, 80, 50, 100, 180, 100, 110, 150]}
      gradient={["#00BCD4", "#2196F3"]}
      radius={20}
      strokeWidth={2}
      strokeLinecap={"round"}
    />
  </Div>
);

const Hero = () => (
  <HeroHeader>
    <HeaderDiv />
    <Header />
    <VVLogo />
    <TrendLine />
  </HeroHeader>
);

export default Hero;
