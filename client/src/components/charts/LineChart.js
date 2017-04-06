import React from "react";
import Chart from "./Chart";
import Highcharts from "highcharts";

const LineChart = props => {
  const { classes } = props.data;

  // Create Array of Objects which contain only assetClass data
  const assetClasses = classes.map(assetClass => {
    const { color, type, weight } = assetClass;
    return { color, name: type, y: weight };
  });

  /* 
    1. Delete isin key from each fund
    2. Prepare y-Value for Chart (each fund-weight is fraction
       of assetClass-weight)
    3. Delete weight key from each fund (data is now in y-Value) 
    */
  const prepAllocationForChart = assetClass => {
    assetClass.funds.forEach((fund, index, fundsArray) => {
      // Set Color: Based on Color of Asset Class node
      const brightness = 0.2 - index / fundsArray.length / 5;
      fund["color"] = Highcharts.Color(assetClass.color)
        .brighten(brightness)
        .get();
      //delete fund["isin"];

      fund.y = fund.weight * assetClass.weight / 100;
      //delete fund["weight"];
    });
  };

  const funds = classes.reduce(
    (funds, assetClass) => {
      // prepare each fund in each assetClass before pushing
      prepAllocationForChart(assetClass);
      funds.push(...assetClass.funds);
      return funds;
    },
    []
  );

  const series = [
    {
      name: "Funds",
      data: funds,
      size: "100%",
      dataLabels: { enabled: false }
    }
  ];

  const options = {
    chart: {
      type: "line",
      backgroundColor: "rgba(0, 0, 0, 0)"
    },
    title: { text: "" },
    yAxis: {
      title: {
        text: "Total percent market share"
      }
    },
    series: series
  };

  return <Chart container="asset-allocation-performance-history" options={options} />;
};

export default LineChart;
