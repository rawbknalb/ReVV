import React from "react";
import { asset, View, Text, Image } from "react-vr";

import CurvedPanel from "./CurvedPanel";
import PortfolioChartImage from "./PortfolioChartImage";
import Fade from "../HOC/Animation/Fade";

/**
 * Each History Image is wrapped inside a <CurvedPanel />
 */
class PortfolioChartPanel extends React.Component {
  render() {
    const { historyURL } = this.props;
    return (
      <CurvedPanel
        width={4096}
        height={800}
        density={8000}
        justifyContent="space-between"
      >
        {this.props.images.map((image, index) => (
          <PortfolioChartImage
            key={index}
            portfolioName={this.props.portfolioName}
            image={image.img}
            chartType={image.type}
          />
        ))}
      </CurvedPanel>
    );
  }
}

export default PortfolioChartPanel;
