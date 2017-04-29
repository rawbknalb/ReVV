import React from "react";
import Chart from "./Chart";

const LineChart = ({ data }) => {
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
    (value !== 0 ? parseFloat(value.toFixed(2)) : value);

  const convertHistoryData = historyData => {
    return historyData.map(val => [
      convertDate(val.date),
      convertPercentage(val.percentage)
    ]);
  };

  const buildSeries = data => {
    const portfolio_1 = {
      ...data[0],
      history: convertHistoryData(data[0].history)
    };

    if (data.length === 2) {
      const portfolio_2 = {
        ...data[1],
        history: convertHistoryData(data[1].history)
      };

      return [
        {
          name: "Angebotenes Portfolio",
          data: portfolio_1.history
          //dataLabels: { enabled: false }
        },
        {
          name: "Gewähltes Portfolio",
          data: portfolio_2.history
          //dataLabels: { enabled: false }
        }
      ];
    }

    return [
      {
        name: "Angebotenes Portfolio",
        data: portfolio_1.history
        //dataLabels: { enabled: false }
      }
    ];
  };

  const options = {
    chart: {
      type: "line",
      backgroundColor: "none"
    },
    rangeSelector: {
      enabled: false,
      inputEnabled: false,
      buttons: [
        {
          type: "year",
          count: 1,
          text: "1 Jahr"
        },
        {
          type: "year",
          count: 3,
          text: "3 Jahre"
        },
        {
          type: "all",
          text: "Maximal"
        }
      ],
      height: 35
    },
    title: { text: "" },
    tooltip: {
      pointFormat: "<span>{series.name}</span>: <b>{point.y} %</b> <br/>",
      valueDecimals: 2,
      crosshairs: true
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
      gridLineDashStyle: "dash",
      gridLineWidth: 0.8,
      gridLineColor: "rgba(255, 255, 255, 0.2)",
      plotLines: [
        {
          color: "#fff",
          width: 0.5,
          value: 0
        }
      ],
      labels: {
        style: {
          color: "white"
        }
      }
    },
    plotOptions: {
      series: {
        // rgb(0, 175, 210)
        states: {
          hover: {
            enabled: true,
            lineWidth: 2,
            halo: {
              size: 5,
              opacity: 1
            },
            marker: {
              enabled: false
            }
          }
        }
      }
    },
    scrollbar: {
      enabled: false
    },
    navigator: {
      enabled: false
    },
    colors: ["#b8e986", "#00afd2"],
    series: buildSeries(data)
  };

  return (
    <Chart
      type="stockChart"
      container="asset-allocation-performance-history"
      options={options}
    />
  );
};

export default LineChart;
