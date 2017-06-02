import React from "react";
import { asset, View, Text, Image } from "react-vr";

import CurvedPanel from "./CurvedPanel";
import Fade from "../HOC/Animation/Fade";

/**
 * Each History Image is wrapped inside a <CurvedPanel />
 */
class HistoryImage extends React.Component {
  render() {
    const { historyURL } = this.props;
    return (
      <CurvedPanel width={4096} height={800} density={8000}>
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
                textAlignVertical: "top"
              }}
            >
              Wertentwicklung des {this.props.selectedPortfolio}
            </Text>
            <Image
              style={{ width: 1000, height: 600 }}
              source={{ uri: `data:image/png;base64,${historyURL.img}` }}
            />
          </View>

        </View>

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
                textAlignVertical: "top"
              }}
            >
              Wertentwicklung des {this.props.selectedPortfolio}
            </Text>
            <Image
              style={{ width: 1000, height: 600 }}
              source={{ uri: `data:image/png;base64,${historyURL.img}` }}
            />
          </View>

        </View>
      </CurvedPanel>
    );
  }
}

export default HistoryImage;
