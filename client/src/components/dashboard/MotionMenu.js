import React from "react";
import styled from "styled-components";
import MotionMenu from "react-motion-menu";

const MenuButton = styled.div`
  text-align: center;
  height: 50px;
  line-height: 50px;
  width: 50px;
  border: solid 1px #fff;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;

const Menu = () => (
  <MotionMenu
    type="circle"
    margin={100}
    y={0}
    bumpy
    x={0}
    openSpeed={150}
    wing={false}
    reverse={false}
    onOpen={() => console.log("onOpen")}
    onClose={() => console.log("onClose")}
  >
    <MenuButton><i className="fa fa-bars fa-inverse" /></MenuButton>
    <MenuButton><i className="fa fa-line-chart fa-inverse" /></MenuButton>
    <MenuButton><i className="fa fa-pie-chart fa-inverse" /></MenuButton>
    <MenuButton><i className="fa fa-globe fa-inverse" /></MenuButton>
  </MotionMenu>
);

export default Menu;
