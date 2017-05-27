import React, { Component } from "react";
import { Text, View, VrButton, Animated } from "react-vr";
import { connect } from "react-redux";

import { switchRoute } from "../../store/actions/routes";

import NavButton from "../../components/NavButton";

const NAV_BUTTONS = [
  { text: "Menü", route: "", type: "toggle" },
  { text: "Home", route: "home", type: "nav", position: 1 },
  { text: "Portfolios", route: "portfolios", type: "nav", position: 2 },
  { text: "Wissen", route: "wissen", type: "nav", position: 3 }
];

class NavigationMenu extends Component {
  constructor() {
    super();
    this.state = {
      translateX: new Animated.Value(-0.2),
      open: false
    };
  }

  renderNavButtons() {
    return NAV_BUTTONS.map(
      button =>
        button.type === "toggle"
          ? <VrButton key={button.text} onClick={() => this.toggleMenu()}>
              <NavButton open={this.state.open} button={button} />
            </VrButton>
          : <VrButton key={button.text} onClick={() => this.handleNavButtonClick(button.route)}>
              <NavButton
                position={button.position}
                open={this.state.open}
                button={button}
              />
            </VrButton>
    );
  }

  moveMenu() {
    Animated.spring(this.state.translateX, {
      toValue: this.state.open ? -0.2 : -2,
      spring: 1
    }).start();
  }

  toggleMenu() {
    this.setState({ open: !this.state.open });
    this.moveMenu();
  }

  handleNavButtonClick(route) {
    this.props.switchRoute(route);
    this.toggleMenu();
  }

  render() {
    return (
      <Animated.View style={this.navigationMenuStyle()}>
        {this.renderNavButtons()}
      </Animated.View>
    );
  }

  navigationMenuStyle = () => ({
    flexDirection: "row",
    justifyContent: "flex-start",
    position: "absolute",
    //layoutOrigin: [0.5, 0.5],
    transform: [
      { translateX: this.state.translateX },
      { rotateX: -20 }
    ]
  })
}

mapStateToProps = state => ({
  route: state.route
});

export default connect(mapStateToProps, { switchRoute })(NavigationMenu);
