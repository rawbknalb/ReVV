import React from "react";
import Chart from "./Chart";
import Highcharts from "highcharts";

import dummyHist from "./dummyHist";

const LineChart = props => {
  const values = dummyHist.history.map(value => value.percentage);
  const dates = dummyHist.history.map(date => date.date);
  console.log(values);
  console.log(dates);

  const series = [
    {
      name: "Angebotenes Portfolio",
      data: values
      //dataLabels: { enabled: false }
    }
  ];

  const options = {
    chart: {
      type: "spline",
      backgroundColor: "rgba(0, 0, 0, 0)"
    },
    title: { text: "" },
    yAxis: {
      title: {
        text: ""
      }
    },
    plotOptions: {
      series: {
        color: "rgb(184, 233, 134)"
      }
    },
    series: series
  };

  return <Chart container="asset-allocation-performance-history" options={options} />;
};

export default LineChart;
