import React from "react";
import Slider from "./Slider";
import PortfolioChart from "../../charts/DonutPieChart";

const Portfolio = props => {
  return (
    <div>
      <div style={props.style} />
      <PortfolioChart data={props.assetAllocation} />
      <Slider />
    </div>
  );
};

export default Portfolio;
