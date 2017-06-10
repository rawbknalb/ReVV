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
          transform: [
            {
              translate: [
                0,
                -1.5,
                this.props.translateZ !== undefined ? this.props.translateZ : -3
              ]
            },
            { rotateY: -0 }
          ],
          layoutOrigin: [0.5, 0.5]
        }}
      >
        <View
          style={{
            flexDirection: this.props.flexDirection !== undefined
              ? this.props.flexDirection
              : "row",
            justifyContent: this.props.justifyContent,
            alignItems: "center",
            width: this.props.width,
            height: this.props.height,
            transform: [{ translate: [0, 0, -5] }]
            //backgroundColor: "papayawhip"
          }}
        >

          {this.props.children}

        </View>

      </CylindricalPanel>
    );
  }
}

export default CurvedPanel;
