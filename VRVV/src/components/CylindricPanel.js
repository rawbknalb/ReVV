import React from "react";
import { View, Image, Text, CylindricalPanel } from "react-vr";

class ChartPanel extends React.Component {
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
        transform: [
          { translate: [0, 1, 0] },
          { rotateY: `${this.props.index * 45}deg` }
        ]
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
