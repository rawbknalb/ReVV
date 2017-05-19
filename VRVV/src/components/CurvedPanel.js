import React from "react";
import { CylindricalPanel, View } from "react-vr";

class CurvedPanel extends React.Component {
  render() {
    return (
      <CylindricalPanel
        layer={{ width: 1400, height: 1000, radius: 3 }}
      >
      <View style={{backgroundColor: "blue"}}>
        {this.props.children}
      </View>
        
      </CylindricalPanel>
    );
  }
}

export default CurvedPanel;
