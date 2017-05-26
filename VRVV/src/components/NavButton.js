import React, { Component } from "react";
import { Text, View, VrButton, Animated } from "react-vr";
import { connect } from "react-redux";

class NavigationMenu extends Component {
  constructor() {
    super();
    this.state = {
      translateY: new Animated.Value(0)
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    nextProps.open === true && nextProps.button.type !== "toggle"
      ? this.openMenu(nextProps.button.position)
      : this.closeMenu();
  }

  openMenu(position) {
    Animated.spring(this.state.translateY, {
      toValue: -position,
      spring: 1,
      tenstion: 10
    }).start();
  }

  closeMenu() {
    Animated.spring(this.state.translateY, {
      toValue: 0,
      spring: 1,
      tenstion: 10
    }).start();
  }

  handleClick(button, index) {
    button.type !== "toggle" && console.log("test");
  }

  /**
   * Render NavButton wrapped inside a VrButton
   * If open-prop is true render each NavButton with its button.text
   * else (open-prop is false) render only a Text inside the Button
   * if its the Button-toggle type
   */
  render() {
    return (
      <View>
        {this.props.open
          ? <Animated.View style={this.buttonStyle()}>
              <Text
                style={{
                  fontSize: 0.1,
                  fontWeight: "900",
                  color: "palegreen",
                  textAlign: "center"
                }}
              >
                {this.props.button.text}
              </Text>
            </Animated.View>
          : <Animated.View style={this.buttonStyle()}>
              {this.props.button.type === "toggle" &&
                <Text
                  style={{
                    fontSize: 0.1,
                    fontWeight: "900",
                    color: "palegreen",
                    textAlign: "center"
                  }}
                >
                  {this.props.button.text}
                </Text>}
            </Animated.View>}

      </View>
    );
  }

  buttonStyle(index) {
    return {
      width: 0.5,
      height: 0.5,
      borderRadius: 1,
      //layoutOrigin: [0.5, 0.5],
      position: "absolute",
      borderColor: "white",
      borderWidth: 0.008,
      opacity: 0.9,
      justifyContent: "center",
      transform: [{ translateY: this.state.translateY }]
    };
  }
}

export default NavigationMenu;
