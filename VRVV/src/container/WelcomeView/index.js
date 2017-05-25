import React from "react";
import { asset, Text, View, Image } from "react-vr";
import { connect } from "react-redux";

class WelcomeView extends React.Component {
  render() {
    return (
      <View>
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
          Herzlich Willkommen zu VisualVest
          {" "}
          <Text style={{ color: "orangered" }}>VR</Text>
        </Text>
      </View>
    );
  }
}

export default WelcomeView;
