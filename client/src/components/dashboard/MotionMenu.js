import React from "react";
import styled from "styled-components";
import MotionMenu from "react-motion-menu";

const MenuButton = styled.div`
  text-align: center;
  height: 30px;
  line-height: 30px;
  width: 30px;
  border: solid 1px #fff;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;

const Center = styled.div`
  padding-bottom: 40px;
`;

const Menu = () => (
  <Center>
    <MotionMenu
      type="horizontal"
      margin={50}
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
