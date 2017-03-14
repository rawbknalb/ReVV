import React from "react";
import Chart from "./Chart";
import Slider from "./Slider";

const Portfolio = props => (
  <div>
    <div style={props.style}>
      <Chart />
    </div>
    <Slider />
  </div>
);

export default Portfolio;
