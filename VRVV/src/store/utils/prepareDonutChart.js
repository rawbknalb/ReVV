const DonutChart = assetAllocation => {
  const colors = {
    Geldmarkt: "rgba(245, 169, 0, 0.7)",
    Anleihen: "rgba(183, 232, 134, 0.7)",
    Aktien: "rgba(0, 174, 209, 0.7)",
    Rohstoffe: "rgba(217, 217, 217, 0.7)"
  };

  const allocation = Object.keys(assetAllocation).map(assetClass => {
    console.log(Math.round(assetAllocation[assetClass] * 100) / 100)
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
      innerSize: "65%",
      showInLegend: true,
      dataLabels: {
        enabled: true,
        connectorWidth: 2,
        distance: 50,
        format: "{y} %",
        style: {
          fontSize: "20px",
          //fontWeight: "bold",
          color: "#fff",
          textOutline: "0px #fff"
        }
      }
    }
  ];

  const options = {
    scale: 2,
    type: "png",
    options: {
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
          shadow: false,
          borderColor: "rgba(255, 255, 255, 1)"
        }
      },
      legend: {
        layout: "horizontal",
        itemMarginTop: 20,
        itemMarginBottom: 0,
        itemHoverStyle: {
          color: "#fff"
        },
        itemStyle: {
          cursor: "default",
          color: "#fff",
          fontWeight: "100",
          fontStyle: "normal",
          fontSize: 20,
          borderWidth: 2
        },
        labelFormatter: function() {
          return `${this.y} % ${this.name}`;
        }
      },
      series: series
    }
  };

  return options;
};

export default DonutChart;
