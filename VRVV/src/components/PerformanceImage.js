import React from "react";
import { View, Text, Image } from "react-vr";

class PerformanceImage extends React.Component {
  render() {
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
              fontSize: 60,
              fontWeight: "400",
              textAlign: "center",
              textAlignVertical: "top",
              margin: 50
            }}
          >
            Wertentwicklung des {this.props.portfolioName}
          </Text>
          <Image
            style={{ width: 1000, height: 600 }}
            source={{ uri: `data:image/png;base64,${this.props.image}` }}
          />
        </View>

      </View>
    );
  }
}

export default PerformanceImage;
