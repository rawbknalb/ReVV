import React, { Component } from "react";
import { connect } from "react-redux";
import { selectPortfolio } from "../../store/actions/simulation";
import Slider from "rc-slider";

import "rc-slider/assets/index.css";

class RiskSlider extends Component {
  componentDidMount() {
    this.props.selectPortfolio(1)
  }

  render() {
    return (
      <div>
        <Slider
          dots
          min={1}
          max={7}
          step={1}
          onAfterChange={value => this.props.selectPortfolio(value)}
          maximumTrackStyle={{ backgroundColor: "white", height: 1 }}
          minimumTrackStyle={{ backgroundColor: "#80e6fb", height: 4 }}
          handleStyle={{
            children: "h",
            borderColor: "white",
            height: 20,
            width: 20,
            marginLeft: -8,
            marginTop: -9,
            backgroundColor: "#80e6fb"
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  portfolioId: state.simulation_data.portfolio.selected.portfolioId
});


export default connect(mapStateToProps, { selectPortfolio })(RiskSlider);
