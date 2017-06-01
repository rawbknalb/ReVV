import React from "react";
import { asset, View, Image } from "react-vr";

import CurvedPanel from "./CurvedPanel";

class Dummy extends React.Component {
  render() {
    console.log(this.props.historyURL)
    const { historyURL } = this.props;
    return (
      <CurvedPanel width={4096} height={800} density={8000}>
        <Image
          style={{ width: 1200, height: 800 }}
          source={{ uri: `data:image/png;base64,${historyURL.img}` }}
        />
                <Image
          style={{ width: 1200, height: 800 }}
          source={{ uri: `data:image/png;base64,${historyURL.img}` }}
        />
      </CurvedPanel>
    );
  }
}

export default Dummy;
