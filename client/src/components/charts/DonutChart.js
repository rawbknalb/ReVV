import React, { Component } from "react";
import Chart from "./Chart";

class DonutChart extends Component {
  render() {
    const { allocation } = this.props.data;
    const portfolio = allocation.map(asset => [asset.type, asset.weight]);
    const funds = allocation.reduce((arr, asset) => [
      ...arr.funds,
      ...asset.funds
    ]);
    console.log(funds);
    const series = [
      {
        name: this.props.data.name,
        data: portfolio,
        size: "10%"
      },
      {
        name: "Funds",
        data: [
          { name: "test", y: 80 },
          { name: "test1", y: 10 },
          { name: "test2", y: 10 }
        ],
        size: "80%",
        innerSize: "60%"
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
          innerSize: "60%",
          shadow: true
        }
      },
      tooltip: {
        valueSuffix: "%"
      },
      series: series
    };

    return <Chart container="asset-allocation-donutChart" options={options} />;
  }
}

export default DonutChart;
