import React from "react";
import { View, CylindricalPanel, Text } from "react-vr";

class CurvedPanel extends React.Component {
  rotate(rotate) {
    switch (rotate) {
      case "x":
        return { rotateX: `${this.props.index * 0.8 * 45}deg` };
      case "y":
        return { rotateY: `${this.props.index * 1 * -45}deg` };
      case "z":
        return { rotateZ: `${this.props.index * 1.1 * -45}deg` };
      default:
        return;
    }
  }
  render() {
    const density = 4096 * 2;
    const greenWidth = density / 3;
    const etfWidth = density / 7;

    const layer = {
      width: etfWidth,
      height: 512,
      density,
      radius: 4
    };

    return (
      <View
        style={{
          layoutOrigin: [0.5, 0.5],
          transform: [{ translateZ: 0 }, this.rotate("y")],
          backgroundColor: "blue"
        }}
      >
        <CylindricalPanel layer={layer}>
          <View
            style={{ width: 350, height: 512 }}
          >
            {this.props.children}
          </View>
        </CylindricalPanel>
      </View>
    );
  }
}

export default CurvedPanel;
