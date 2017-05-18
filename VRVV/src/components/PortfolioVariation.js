import React from "react";
import { asset, View, Text, Image } from "react-vr";

class PortfolioVariation extends React.Component {
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
          height: 15,
        }}
      >
        <Text
          style={{
            fontSize: 1,
            fontWeight: "400",
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: "center",
            textAlignVertical: "center"
          }}
        >
          {this.props.header}
        </Text>
        <Image source={asset(this.props.img)} style={{ width: 5, height: 5 }} />
        <Text
          style={{
            fontSize: 0.6,
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
    );
  }
}

export default PortfolioVariation;
