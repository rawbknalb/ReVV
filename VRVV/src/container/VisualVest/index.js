import React, { Component } from "react";
import { asset, Text, View } from "react-vr";

import CurvedPanel from "../../components/CurvedPanel";

class VisualVest extends Component {
  render() {
    return (
      <View style={{ transform: [{ translate: [0, 0, -3] }] }}>
        <CurvedPanel
          width={4096}
          height={800}
          density={8000}
          justifyContent="space-between"
        >
          <View>
            <Text>Test</Text>
          </View>
        </CurvedPanel>

      </View>
    );
  }
}

export default VisualVest;
