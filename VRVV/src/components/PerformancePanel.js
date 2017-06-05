import React from "react";
import { asset, View, Text, Image } from "react-vr";

import CurvedPanel from "./CurvedPanel";
import PerformanceImage from "./PerformanceImage";
import Fade from "../HOC/Animation/Fade";

/**
 * Each History Image is wrapped inside a <CurvedPanel />
 */
class PerformancePanel extends React.Component {
  render() {
    const { historyURL } = this.props;
    return (
      <CurvedPanel width={4096} height={800} density={8000}>
        {this.props.images.map((image, index) => (
          <PerformanceImage
            key={index}
            portfolioName={this.props.selectedPortfolio}
            image={image.img}
          />
        ))}
      </CurvedPanel>
    );
  }
}

export default PerformancePanel;
