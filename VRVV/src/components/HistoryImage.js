import React from "react";
import { asset, View, Image } from "react-vr";

class Dummy extends React.Component {
  render() {
    console.log()
    return (
      <View
        style={{
          // flexDirection: "column",
          // justifyContent: "space-around",
          // alignItems: "center",
          // backgroundColor: this.props.color,
          // margin: this.props.margin,
          // borderRadius: 0.2,
          transform: [{translate: [10,0,-15]}],
          width: 3,
          height: 4
          //borderWidth: 0.1
        }}
      >
        <Image source={{ uri: `data:image/png;base64,${this.props.historyURL}` }} />
      </View>
    );
  }
}

export default Dummy;
