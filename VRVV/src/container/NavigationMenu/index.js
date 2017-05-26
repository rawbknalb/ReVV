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
      open: false
    };
  }

  renderNavButtons() {
    return NAV_BUTTONS.map(
      button =>
        button.type === "toggle"
          ? <VrButton onClick={() => this.toggleMenu()}>
              <NavButton open={this.state.open} button={button} />
            </VrButton>
          : <VrButton onClick={() => this.props.switchRoute(button.route)}>
              <NavButton
                position={button.position}
                open={this.state.open}
                button={button}
              />
            </VrButton>
    );
  }

  toggleMenu() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-start",
          position: "absolute",
          transform: [{ translate: [0, -5, 0] }]
        }}
      >
        {this.renderNavButtons()}
      </View>
    );
  }
}

mapStateToProps = state => ({
  route: state.route
});

export default connect(mapStateToProps, { switchRoute })(NavigationMenu);
