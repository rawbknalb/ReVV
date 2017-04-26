import React from "react";
import Chart from "./Chart";

const LineChart = props => {
  const portfolio_1 = { ...props.data[0] };
  const portfolio_2 = { ...props.data[1] };

  const convertDate = date => {
    // const options = { year: "numeric", month: "long", day: "2-digit" };
    // const d = new Date(date);
    // return d.toLocaleString("de", options);
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8);
    const convertedDate = Date.UTC(year, month, day);
    return convertedDate;
  };

  const convertPercentage = value =>
    (value != 0 ? parseFloat(value.toFixed(2)) : value);

  const history_1 = portfolio_1.history.map(val => [
    convertDate(val.date),
    convertPercentage(val.percentage)
  ]);

  const series = [
    {
      name: "Angebotenes Portfolio",
      data: history_1
      //dataLabels: { enabled: false }
    }
  ];

  const options = {
    chart: {
      type: "spline",
      backgroundColor: "none"
    },
    title: { text: "" },
    tooltip: {
      pointFormat: "<span>{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>",
      valueDecimals: 2
    },
    xAxis: {
      type: "datetime",
      labels: {
        style: {
          color: "white"
        }
      }
    },
    yAxis: {
      title: {
        text: ""
      },
      floor: -9,
      ceiling: 30,
      labels: {
        style: {
          color: "white"
        }
      }
    },
    plotOptions: {
      series: {
        color: "rgb(184, 233, 134)"
      }
    },
    series: series
  };

  return (
    <Chart container="asset-allocation-performance-history" options={options} />
  );
};

export default LineChart;
