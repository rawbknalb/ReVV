import React from "react";

const Tab = props => (
  <div onClick={() => props.handleClick()}>
    {props.tabName}
  </div>
);

export default Tab;
