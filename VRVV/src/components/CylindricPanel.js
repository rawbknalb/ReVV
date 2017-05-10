import React from "react";
import { View, Image, Text, CylindricalPanel } from "react-vr";

class ChartPanel extends React.Component {
  rotate(rotate) {
    //const { rotateAxis } = this.props;
    switch (rotate) {
      case "x":
        return { rotateX: `${this.props.index * 0.8 * 45}deg` };
      case "y":
        return { rotateY: `${this.props.index * 1.1 * -45}deg` };
      case "z":
        return { rotateZ: `${this.props.index * 1.1 * -45}deg` };
      default:
        return;
    }
  }

  render() {
    const styles = {
      viewStyle: {
        flexDirection: "column",
        alignItems: "center",
        width: 1400,
        height: 1000
      },
      cylinderStyle: {
        position: "absolute",
        transform: [{ translate: [0, 1.5, 0] }, this.rotate(this.props.rotate)]
      }
    };

    return (
      <CylindricalPanel
        layer={{
          width: 1400,
          height: 1000,
          density: 12000,
          radius: 3
        }}
        style={styles.cylinderStyle}
      >
        <View style={styles.viewStyle}>
          {this.props.children}
        </View>
      </CylindricalPanel>
    );
  }
}

export default ChartPanel;
