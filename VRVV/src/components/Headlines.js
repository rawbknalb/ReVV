import React from "react";
import { View, Text } from "react-vr";

export class PortfolioOverViewHeadlines extends React.Component {
  render() {
    return (
      <Text
        style={{
          fontSize: 1,
          fontWeight: "300",
          layoutOrigin: [0.5, 0.5],
          paddingLeft: 0.2,
          paddingRight: 0.2,
          textAlign: "center",
          textAlignVertical: "center",
          transform: [{ translate: [0, 5, -12] }]
        }}
      >
        Wähle ein Portfolio aus
        <Text style={{ color: "orangered" }}>VR</Text>
      </Text>
    );
  }
}
