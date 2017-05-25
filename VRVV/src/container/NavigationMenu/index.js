import React, { Component } from "react";
import { Text, View, VrButton, Animated } from "react-vr";
import { connect } from "react-redux";

import { switchRoute } from "../../store/actions/routes";

const NAV_BUTTONS = [
  { text: "Menü", route: "", type: "toggle" },
  { text: "Home", route: "home", type: "nav" },
  { text: "Portfolios", route: "portfolios", type: "nav" },
  { text: "Wissen", route: "wissen", type: "nav" }
];

class NavigationMenu extends Component {
  constructor() {
    super();
    this.state = {
      translateX: new Animated.Value(0)
    };
  }

  animateToggle() {
    Animated.spring(this.state.translateX, {
      toValue: 1,
      spring: 1
    }).start();
  }
  handleClick(button, index) {
    button.type === "toggle"
      ? this.animateToggle()
      : this.props.switchRoute(button.route);
  }

  renderNavButtons() {
    return NAV_BUTTONS.map((button, index) => (
      <VrButton
        index={button.text}
        onClick={() => this.handleClick(button)}
      >
        <Animated.View style={this.buttonStyle(index)}>
          <Text style={{ fontSize: 0.1, color: "red", textAlign: "center" }}>
            {button.text}
          </Text>
        </Animated.View>
      </VrButton>
    ));
  }

  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {this.renderNavButtons()}
      </View>
    );
  }

  buttonStyle(index) {
    return {
      width: 0.5,
      height: 0.5,
      borderRadius: 1,
      //position: "absolute",
      backgroundColor: "papayawhip",
      justifyContent: "center",
      transform: [{ translateX: this.state.translateX  }]
    };
  }
}

mapStateToProps = state => ({
  route: state.route
});

export default connect(mapStateToProps, { switchRoute })(NavigationMenu);
