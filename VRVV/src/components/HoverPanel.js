import React from "react";
import {
  asset,
  View,
  Text,
  Image,
  StyleSheet,
  CylindricalPanel,
  VrButton,
  Animated
} from "react-vr";

import { rotateOnHover } from "../utils";

class HoverPanel extends React.Component {
  state = {
    hover: false,
    translateZ: new Animated.Value(0),
    translateX: new Animated.Value(0)
  };
  duration = 400;
  handleEnter() {
    //this.setState({ hover: !this.state.hover });
    Animated.parallel([
      Animated.timing(this.state.translateZ, {
        toValue: 1,
        duration: this.duration
      })
    ]).start();
  }

  handleExit() {
    //this.setState({ hover: !this.state.hover });
    Animated.parallel([
      Animated.spring(this.state.translateZ, {
        toValue: 0,
        friction: 3
      })
    ]).start();
  }

  render() {
    return (
      <VrButton
        onEnter={() => this.handleEnter()}
        onExit={() => this.handleExit()}
      >
        <Animated.View style={this.hoverStyle()}>
          {this.props.children}
        </Animated.View>
      </VrButton>
    );
  }

  hoverStyle = () => ({
    transform: [
      { translateZ: this.state.translateZ },
      { rotateY: this.state.translateX }
    ]
  });
}

export default HoverPanel;
