import React from "react";
import Slider from "rc-slider";

import "rc-slider/assets/index.css";

const RiskSlider = () => (
  <div>
    <Slider
      dots
      min={1}
      max={7}
      step={1}
      onAfterChange={value => console.log(value)}
      maximumTrackStyle={{ backgroundColor: "white", height: 1 }}
      minimumTrackStyle={{ backgroundColor: "#80e6fb", height: 4 }}
      handleStyle={{
        children: "h",
        borderColor: "white",
        height: 20,
        width: 20,
        marginLeft: -8,
        marginTop: -9,
        backgroundColor: "#80e6fb"
      }}
    />
  </div>
);

export default RiskSlider;
