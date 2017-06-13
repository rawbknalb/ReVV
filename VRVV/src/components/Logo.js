import React from "react";
import { asset, View, Image, Animated } from "react-vr";

class Logo extends React.Component {
  state = {
    rotateX: new Animated.Value(0),
    rotateY: new Animated.Value(0),
    rotateZ: new Animated.Value(0)
  };

  componentDidMount() {
    this.animateHead();
  }

  animateHead() {
    this.state.rotateX.setValue(0);
    this.state.rotateY.setValue(0);
    this.state.rotateZ.setValue(0);
    Animated.sequence([
      Animated.parallel([
        Animated.timing(this.state.rotateY, {
          toValue: -0.05,
          duration: 4000
        }),
        Animated.timing(this.state.rotateZ, {
          toValue: 0.02,
          duration: 4000
        })
      ]),
      Animated.parallel([
        Animated.timing(this.state.rotateY, {
          toValue: 0,
          duration: 4000
        }),
        Animated.timing(this.state.rotateZ, {
          toValue: 0,
          duration: 4000
        })
      ]),
      Animated.parallel([
        Animated.timing(this.state.rotateY, {
          toValue: 0.05,
          duration: 4000
        }),
        Animated.timing(this.state.rotateZ, {
          toValue: 0,
          duration: 4000
        })
      ]),
      Animated.parallel([
        Animated.timing(this.state.rotateY, {
          toValue: 0,
          duration: 4000
        }),
        Animated.timing(this.state.rotateZ, {
          toValue: 0,
          duration: 4000
        })
      ])
    ]).start(() => this.animateHead());
  }

  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start"
        }}
      >
        <Animated.Image
          source={asset("vr_head_red.png")}
          style={this.vrHeadStyle()}
        />
        <Image source={asset("logo.png")} style={{ width: 10, height: 3 }} />
      </View>
    );
  }

  vrHeadStyle = () => ({
    width: 4,
    height: 4,
    transform: [
      {
        rotateX: this.state.rotateX.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "360deg"]
        })
      },
      {
        rotateY: this.state.rotateY.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "360deg"]
        })
      },
      {
        rotateZ: this.state.rotateZ.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "360deg"]
        })
      }
    ]
  });
}

export default Logo;
