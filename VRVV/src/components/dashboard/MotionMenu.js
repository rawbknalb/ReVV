import React from "react";
import styled from "styled-components";
import MotionMenu from "react-motion-menu";

const MenuButton = styled.div`
  text-align: center;
  height: 40px;
  line-height: 40px;
  width: 40px;
  border: solid 1px #fff;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;

const Center = styled.div`
  padding-bottom: 150px;
  padding-top: 50px;
`;

const Menu = () => (
  <Center>
    <MotionMenu
      type="circle"
      margin={60}
      y={0}
      bumpy
      x={0}
      openSpeed={120}
      wing
      onOpen={() => console.log("onOpen")}
      onClose={() => console.log("onClose")}
    >
      <MenuButton><i className="fa fa-bars fa-inverse" /></MenuButton>
      <MenuButton><i className="fa fa-line-chart fa-inverse" /></MenuButton>
      <MenuButton><i className="fa fa-pie-chart fa-inverse" /></MenuButton>
      <MenuButton><i className="fa  fa-area-chart fa-inverse" /></MenuButton>
      <MenuButton><i className="fa fa-globe fa-inverse" /></MenuButton>

    </MotionMenu>
  </Center>
);

export default Menu;
