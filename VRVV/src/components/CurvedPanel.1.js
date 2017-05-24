import React from "react";
import { View } from "react-vr";

class CurvedPanel extends React.Component {
  rotate(axis) {
    const { count } = this.props;
    const { index } = this.props;
    const mod = count % 2;
    const oddMultiplier = Math.abs(Math.floor(count / 2) - index);
    const evenMultiplier = Math.abs(count);
    if (mod === 0) {
      if (index === count / 2 || index === count / 2 + 1) {
        return { rotateY: 0 };
      }
      if (index < count / 2) {
        return { rotateY: `${(index + 1) * 4}deg` };
      }
      if (index > count / 2) {
        return { rotateY: `${(index + 1) * -4}deg` };
      }
    } else {
      console.log(Math.floor(count / 2));
      if (index === Math.floor(count / 2)) {
        return [{ rotateY: 0 }];
      }
      if (index < Math.floor(count / 2)) {
        return ([
          { rotateY: `${oddMultiplier * 1.5 * 15}deg` },
          { translateZ: oddMultiplier * 2 }
        ]);
      }
      if (index > Math.floor(count / 2)) {
        return [
          { rotateY: `${oddMultiplier * 1.5 * -15}deg` },
          { translateZ: oddMultiplier *2 }
        ];
      }
    }
  }

  render() {
    return (
      <View style={{ transform: this.rotate("y") }}>
        {this.props.children}
      </View>
    );
  }
}

export default CurvedPanel;
