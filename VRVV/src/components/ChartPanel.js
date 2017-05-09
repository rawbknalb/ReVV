import React from "react";
import { View, Image, Text, CylindricalPanel } from "react-vr";
import CylindricPanel from "./CylindricPanel";

class ChartPanel extends React.Component {
  render() {
    const styles = {
      headerStyle: {
        fontSize: 100,
        fontWeight: "400",
        paddingLeft: 0.2,
        paddingRight: 0.2,
        textAlign: "center",
        textAlignVertical: "center"
      },
      imageStyle: {
        width: 1400,
        height: 800
      }
    };

    return (
      <CylindricPanel index={this.props.index}>
        <Text style={styles.headerStyle}>
          {this.props.header}
        </Text>
        <Image
          style={styles.imageStyle}
          source={{
            uri: this.props.uri
          }}
        />
      </CylindricPanel>
    );
  }
}

export default ChartPanel;
