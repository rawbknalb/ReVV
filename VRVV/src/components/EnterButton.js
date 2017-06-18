import React from "react";
import { asset, View, Text, Image } from "react-vr";

class EnterButton extends React.Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >

        <View
          style={{
            position: "absolute",
            width: 1300,
            height: 1000,
            backgroundColor: "black",
            borderRadius: 10,
            opacity: 0.85
          }}
        />
        <Image
          style={{ width: 700, height: 700 }}
          source={asset("virtual-512.png")}
        />
        <Text
          style={{
            margin: 0,
            fontSize: 100,
            fontWeight: "bold",
            textAlign: "center"
          }}
        >
          Enter VisualVest
        </Text>
        <Text
          style={{
            margin: 0,
            fontSize: 100,
            fontWeight: "bold",
            textAlign: "center",
            color: "tomato"
          }}
        >
          VR
        </Text>
      </View>
    );
  }
}

export default EnterButton;
