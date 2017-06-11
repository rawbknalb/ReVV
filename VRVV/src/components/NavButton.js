import React, { Component } from "react";
import { Text, View, VrButton, Animated } from "react-vr";
import { connect } from "react-redux";

class NavigationMenu extends Component {
  constructor() {
    super();
    this.state = {
      translateX: new Animated.Value(0)
    };
  }

  componentWillReceiveProps(nextProps) {
    nextProps.open === true && nextProps.button.type !== "toggle"
      ? this.openMenu(nextProps.button.position)
      : this.closeMenu();
  }

  openMenu(position) {
    Animated.spring(this.state.translateX, {
      toValue: position * 1.3,
      spring: 1,
      tenstion: 10
    }).start();
  }

  closeMenu() {
    Animated.spring(this.state.translateX, {
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
              <View
                style={
                  this.props.open && {
                    backgroundColor: "black",
                    position: "absolute",
                    width: 1.18,
                    height: 0.68,
                    borderRadius: 0.1,
                    opacity: 0.5
                  }
                }
              />
              <Text
                style={{
                  fontSize: 0.2,
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "center"
                }}
              >
                {this.props.button.text}
              </Text>
            </Animated.View>
          : <Animated.View style={this.buttonStyle()}>
              <View
                style={
                  !this.props.open &&
                  this.props.button.type === "toggle" && {
                    backgroundColor: "black",
                    position: "absolute",
                    width: 1.18,
                    height: 0.68,
                    borderRadius: 0.09,
                    opacity: 0.5
                  }
                }
              />
              {this.props.button.type === "toggle" &&
                <Text
                  style={{
                    fontSize: 0.2,
                    fontWeight: "bold",
                    //color: "palegreen",
                    color: "white",
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
      width: 1.2,
      height: 0.7,
      borderRadius: 0.1,
      layoutOrigin: [0.5, 0.5],
      //backgroundColor: "blue",
      position: "absolute",
      borderColor: "white",
      borderWidth: 0.009,
      opacity: 0.9,
      justifyContent: "center",
      transform: [{ translateX: this.state.translateX }]
    };
  }
}

export default NavigationMenu;
