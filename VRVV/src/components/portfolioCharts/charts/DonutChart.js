import React from "react";
import Chart from "./Chart";

const DonutChart = ({ assetAllocation }) => {
  const colors = {
    Geldmarkt: "rgba(245, 169, 0, 0.35)",
    Anleihen: "rgba(183, 232, 134, 0.35)",
    Aktien: "rgba(0, 174, 209, 0.35)",
    Rohstoffe: "rgba(217, 217, 217, 0.35)"
  };

  const allocation = Object.keys(assetAllocation).map(assetClass => {
    return {
      name: assetClass,
      y: Math.round(assetAllocation[assetClass] * 100) / 100,
      color: colors[assetClass]
    };
  });
  const series = [
    {
      name: "Anlageaufteilung",
      data: allocation,
      size: "100%",
      innerSize: "85%",
      showInLegend: true,
      dataLabels: {
        enabled: false
      }
    }
  ];

  const options = {
    chart: {
      type: "pie",
      backgroundColor: "none"
    },
    title: { text: "" },
    yAxis: {
      title: {
        text: "Total percent market share"
      }
    },
    plotOptions: {
      pie: {
        animation: {
          duration: 800
        },
        shadow: false,
        allowPointSelect: false,
        point: {
          events: {
            legendItemClick: function(e) {
              e.preventDefault();
            }
          }
        },
        borderColor: "rgba(255, 255, 255, 0.5)",
        states: {
          hover: {
            enabled: false
          }
        }
      }
    },
    tooltip: {
      enabled: false
    },
    legend: {
      layout: "vertical",
      itemMarginBottom: 15,
      itemHoverStyle: {
        color: "#fff"
      },
      itemStyle: {
        cursor: "default",
        color: "#fff",
        fontWeight: "100",
        fontStyle: "normal",
        fontSize: 12,
        borderWidth: 2
      },
      labelFormatter: function() {
        return `${this.y} % ${this.name}`;
      }
    },
    series: series
  };

  return <Chart container="asset-allocation-chart" options={options} />;
};

export default DonutChart;
