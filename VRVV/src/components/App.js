import React from "react";
import { asset, Pano, Text, View } from "react-vr";

import ChartPanel from "./ChartPanel";

//import Dashboard from "./dashboard/Dashboard"

class App extends React.Component {
  renderPanels() {
    const images = [
      { uri: "../static_assets/1yr.jpg", header: "Wertentwicklung 1 Jahr" },
      { uri: "../static_assets/3yrs.jpg", header: "Wertentwicklung 3 Jahre" },
      { uri: "../static_assets/maxyrs.jpg", header: "Wertentwicklung Maximal" }
    ];

    return images.map((image, index) => (
      <ChartPanel
        rotate="x"
        header={image.header}
        uri={image.uri}
        index={index}
      />
    ));
  }
  render() {
    return (
      <View>
        <Pano source={asset("tasmania.jpg")} />
        <Text
          style={{
            fontSize: 0.8,
            fontWeight: "400",
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: "center",
            textAlignVertical: "center",
            transform: [{ translate: [0, 9, -10] }]
          }}
        >
          VisualVest
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            transform: [{ rotate: "0deg" }]
          }}
        >
          {this.renderPanels()}
        </View>

      </View>
    );
  }
}

export default App;
