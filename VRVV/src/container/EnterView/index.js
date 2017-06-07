import React from "react";
import { View, Text, Image, CylindricalPanel, VrButton } from "react-vr";

import { connect } from "react-redux";
import { switchRoute } from "../../store/actions/routes";

import EnterButton from "../../components/EnterButton";

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
        <VrButton onClick={() => this.props.switchRoute("intro")}>
          <View
            style={{
              //layoutOrigin: [0.5, 0.5],
              //position: "absolute",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              width: 2000,
              height: 500,
              transform: [{ translate: [0, 0, -5] }]
            }}
          >

            <EnterButton />

          </View>

        </VrButton>

      </CylindricalPanel>
    );
  }
}

export default connect(null, { switchRoute })(EnterView);
