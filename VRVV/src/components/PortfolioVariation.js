import React from "react";
import { asset, View, Text, Image } from "react-vr";

import FlatPanel from "./FlatPanel";

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
      <FlatPanel color={this.props.color} margin={0.5}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            height: 4,
            width: 3
          }}
        >
          <Text
            style={{
              fontSize: 0.2,
              fontWeight: "100",
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
            style={{ width: 1.8, height: 1.8 }}
          />
          <Text
            style={{
              fontSize: 0.2,
              fontWeight: "100",
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: "center",
              textAlignVertical: "center"
            }}
          >
            {this.props.text}
          </Text>
        </View>
      </FlatPanel>
    );
  }
}

export default PortfolioVariation;
