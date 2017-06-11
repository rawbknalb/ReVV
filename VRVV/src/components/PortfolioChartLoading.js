import React from "react";
import { View, Text, Image } from "react-vr";

class PortfolioChartLoading extends React.Component {
  render() {
    console.log("render");
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            width: 1200,
            height: 800,
            backgroundColor: "black",
            opacity: 0.7,
            borderRadius: 10
          }}
        />
        <View style={{ position: "absolute" }}>
          <Text
            style={{
              //position: "absolute",
              fontSize:80,
              fontWeight: "bold",
              textAlign: "center",
              textAlignVertical: "top",
              margin: 50
            }}
          >
            Lade...
          </Text>
        </View>

      </View>
    );
  }
}

export default PortfolioChartLoading;
