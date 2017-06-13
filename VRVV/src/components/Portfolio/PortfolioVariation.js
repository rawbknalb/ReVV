import React from "react";
import { asset, View, Text, Image } from "react-vr";

class PortfolioVariation extends React.Component {
  render() {
  
    return (
      <View>
        <View
          style={{
            width: 1000,
            height: 800,
            position: "absolute",
            backgroundColor: "black",
            borderRadius: 20,
            borderColor: "white",
            borderWidth: this.props.selectedVariation === this.props.type ? 10 : 0,
            opacity: 0.8
          }}
        />
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            height: 800,
            width: 1000
          }}
        >
          <Text
            style={{
              fontSize: 80,
              fontWeight: "bold",
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: "center",
              textAlignVertical: "center"
            }}
          >
            {this.props.header}
          </Text>
          <Image
            source={asset(this.props.img)}
            style={{ width: 400, height: 400 }}
          />
          <Text
            style={{
              fontSize: 50,
              fontWeight: "400",
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: "center",
              textAlignVertical: "center"
            }}
          >
            {this.props.text}
          </Text>
        </View>
      </View>
    );
  }
}

export default PortfolioVariation;
