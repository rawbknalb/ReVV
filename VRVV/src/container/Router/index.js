import React, { Component } from "react";
import { connect } from "react-redux";

/**
 * Import all Container-Views
 */
import PortfolioOverView from "../PortfolioOverView";
import WelcomeView from "../WelcomeView";
import EnterView from "../EnterView";
import VisualVest from "../VisualVest";

class Router extends Component {
  renderComponent() {
    switch (this.props.route) {
      case "enter":
        return <EnterView />;
      case "home":
        return <WelcomeView />;
      case "portfolios":
        return <PortfolioOverView />;
      case "visualvest":
        return <VisualVest />;
      default:
        return <WelcomeView />;
    }
  }
  render() {
    return this.renderComponent();
  }
}

const mapStateToProps = state => ({ route: state.route });

export default connect(mapStateToProps)(Router);
