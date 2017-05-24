import React from "react";
import { asset, View, Text, Image } from "react-vr";

class FlatPanel extends React.Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: this.props.color,
          margin: this.props.margin,
          borderRadius: 0.2,
          width: 3,
          height: 4
          //borderWidth: 0.1
        }}
      >
        {this.props.children}
      </View>
    );
  }
}

export default FlatPanel;
