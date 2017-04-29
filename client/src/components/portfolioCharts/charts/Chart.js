import React, { Component } from "react";
import Highcharts from "highcharts";
import Highstock from "highcharts/highstock";

class Chart extends Component {
  initializeChart() {
    switch (this.props.type) {
      case "stockChart": 
        return (this.chart = new Highstock[this.props.type](
          this.props.container,
          this.props.options
        ));
      default:
        return (this.chart = new Highcharts[this.props.type || "Chart"](
          this.props.container,
          this.props.options
        ));
    }
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
