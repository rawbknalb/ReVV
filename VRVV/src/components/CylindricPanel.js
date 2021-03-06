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
      cylinderStyle: {
        position: "absolute",
        transform: [{ translate: [0, 0, -1] }, this.rotate(this.props.rotate)]
      }
    };

    return (
      <CylindricalPanel
        layer={{
          width: 1400,
          height: 1000
        }}
        style={styles.cylinderStyle}
      >
        {this.props.children}
      </CylindricalPanel>
    );
  }
}

export default ChartPanel;
