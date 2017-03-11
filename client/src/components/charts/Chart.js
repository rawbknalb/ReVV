import React, { Component } from "react";
import Highcharts from "highcharts";

class Chart extends Component {
  initializeChart() {
    return (this.chart = new Highcharts[this.props.type || "Chart"](
      this.props.container,
      this.props.options
    ));
  }

  componentDidMount() {
    this.initializeChart();
  }

  componentDidUpdate() {
    this.initializeChart();
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return <div id={this.props.container} />;
  }
}

export default Chart;
