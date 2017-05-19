import React from "react";
import { asset, View, Text, Image } from "react-vr";

class FlatPanel extends React.Component {
  render() {
    const styles = {
      viewStyle: {
        flexDirection: "column",
        alignItems: "center",
        width: 1400,
        height: 1000
      }
    };

    return (
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: this.props.color,
          margin: 0.5,
          width: 9,
          borderRadius: 0.5,
          borderWidth: 0.1
        }}
      >
        {this.props.children}
      </View>
    );
  }
}

export default FlatPanel;
