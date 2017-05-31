import React from "react";
import { asset, View, Text, Image, CylindricalPanel, VrButton } from "react-vr";

import { connect } from "react-redux";
import { switchRoute } from "../../store/actions/routes";

class EnterView extends React.Component {
  render() {
    return (
      <CylindricalPanel
        layer={{ width: 2000, height: 500, radius: 4 }}
        style={{
          transform: [{ translate: [0, 0, -5] }],
          layoutOrigin: [0.5, 0.5]
        }}
      >
        <VrButton onClick={() => this.props.switchRoute("home")}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              //layoutOrigin: [0.5, 0.5],
              width: 2000,
              height: 500,
              transform: [{ translate: [0, 0, -5] }]
            }}
          >
            <View
              style={{
                position: "absolute",
                width: 800,
                height: 500,
                backgroundColor: "black",
                borderRadius: 0.1,
                opacity: 0.9,
                margin: 1
              }}
            />
            <Image
              style={{ position: "absolute", width: 200, height: 200 }}
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
                textAlign: "center"
              }}
            >
              VR
            </Text>
            <View
              style={{
                
                width: 800,
                height: 500,
                backgroundColor: "black",
                borderRadius: 0.1,
                opacity: 0.9,
                margin: 1
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
                textAlign: "center"
              }}
            >
              VR
            </Text>
          </View>

        </VrButton>

      </CylindricalPanel>
    );
  }
}

export default connect(null, { switchRoute })(EnterView);
