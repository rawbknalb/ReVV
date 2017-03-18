import React from "react";
import Slider from "./Slider";
import PortfolioChart from "../../charts/DonutPieChart";

const Portfolio = props => {
  const { assetAllocation } = props;
  return (
    <div>
      <div style={props.style} />
      <PortfolioChart data={assetAllocation} />
      <Slider />
    </div>
  );
};

export default Portfolio;
