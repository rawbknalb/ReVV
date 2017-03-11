import React, { Component } from "react";
import Chart from "./Chart";

class DonutChart extends Component {
  render() {

    const a = 80;

    const series = [
      {
        name: this.props.data.name,
        data: [["MSCI WORLD", a], ["MSCI EM", 20]]
      }
    ];

    const options = {
      chart: {
        type: "pie",
        backgroundColor: "rgba(0, 0, 0, 0)"
      },
      title: { text: "Asset Allocation" },
      plotOptions: {
        pie: {
          borderColor: "#000000",
          innerSize: "60%"
        }
      },
      tooltip: {
        valueSuffic: "%"
      },
      series: series
    };

    return <Chart container="asset-allocation-donutChart" options={options} />;
  }
}

export default DonutChart;
