import React from "react";
import { View, CylindricalPanel, Text, VrButton } from "react-vr";

class CurvedPanel extends React.Component {
  render() {
    return (
      <CylindricalPanel
        layer={{
          width: this.props.width,
          height: this.props.height,
          density: this.props.density,
          radius: 10
        }}
        style={{
          transform: [{ translate: [0, -1.5, -2] }, { rotateY: -0}],
          layoutOrigin: [0.5, 0.5]
        }}
      >
        <VrButton
        //onClick={() => this.props.switchRoute("home")}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: this.props.width,
              height: this.props.height,
              transform: [{ translate: [0, 0, -5] }],
              //backgroundColor: "blue"
            }}
          >

            {this.props.children}

          </View>

        </VrButton>

      </CylindricalPanel>
    );
  }
}

export default CurvedPanel;
