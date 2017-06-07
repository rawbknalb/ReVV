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
            width: 700,
            height: 500,
            backgroundColor: "black",
            borderRadius: 10,
            opacity: 0.9
          }}
        />
        <Image
          style={{ width: 200, height: 200 }}
          source={asset("ar-glasses.png")}
        />
        <Text
          style={{
            margin: 1,
            fontSize: 100,
            textAlign: "center"
          }}
        >
          Enter VisualVest
        </Text>
        <Text
          style={{
            margin: 1,
            fontSize: 100,
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
