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
import { connect } from "react-redux";
import { selectPortfolio } from "../store/actions/simulation";

class HoverPanel extends React.Component {
  state = { hover: false, translateZ: new Animated.Value(0) };
  duration = 500;
  handleEnter() {
    //this.setState({ hover: !this.state.hover });
    Animated.timing(this.state.translateZ, {
      toValue: 3,
      duration: this.duration
    }).start();
  }

  handleExit() {
    //this.setState({ hover: !this.state.hover });
    Animated.spring(this.state.translateZ, {
      toValue: 0,
      friction: 5,
      duration: this.duration
    }).start();
  }

  handleClick() {
    this.props.selectPortfolio(this.props.portfolioId);
  }

  render() {
    return (
      <VrButton
        onEnter={() => this.handleEnter()}
        onExit={() => this.handleExit()}
        onClick={() => this.handleClick()}
      >
        <Animated.View style={this.hoverStyle()}>
          {this.props.children}
        </Animated.View>
      </VrButton>
    );
  }

  hoverStyle = () => ({
    transform: [{ translateZ: this.state.translateZ }]
  });
}

export default connect(null, { selectPortfolio })(HoverPanel);
