const LineChart = (data, type) => {
  /**
   * Converts each date ("YYYY-MM-DD") to (D)D. Months
   * e.g. "1. May", "12. Jun"
   */
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

  const convertPercentage = value => {
    return value !== 0 ? parseFloat(value.toFixed(2)) : value;
  };

  const convertCurrency = value => {
    return value !== 0 ? (1 + parseFloat(value.toFixed(2)) / 100) * 500 : 500;
  };

  /**
   * Switch Function gets value and type as arguments.
   * Depending on the type 
   */
  const convertValue = (value, type) => {
    switch (type) {
      case "%":
        return convertPercentage(value);
      case "€":
        return convertCurrency(value);
    }
  };

  /**
   * Takes the whole historyData-Array as an argument.
   * Maps over each element and creates a new Array 
   * [Date, Percentage]. Uses convertDate() and convertPercentage()
   */
  const convertHistoryData = (historyData, type) => {
    return historyData.map(dataPoint => [
      convertDate(dataPoint.date),
      convertValue(dataPoint.percentage, type)
    ]);
  };

  const buildSeries = (data, type) => {
    // if only 1 portfolio-history exists in the store
    // create this portfolio-history object by using
    // convertHistoryData - date and percentage
    const portfolio_1 = {
      ...data[0],
      history: convertHistoryData(data[0].history, type)
    };
    // if there are 2 portfolio-histories in the store
    // create the second portfolio-history object
    // convertHistoryData - date and percentage
    if (data.length === 2) {
      const portfolio_2 = {
        ...data[1],
        history: convertHistoryData(data[1].history)
      };
      // return the 2 portfolio_n.history objects
      return [
        {
          name: "Portfolio Name",
          type: "spline",
          data: portfolio_1.history
          //dataLabels: { enabled: false }
        },
        {
          name: "Portfolio Name",
          type: "spline",
          data: portfolio_2.history
          //dataLabels: { enabled: false }
        }
      ];
    }
    // return only 1 portfolio-history object
    return [
      {
        type: "spline",
        data: portfolio_1.history
        //dataLabels: { enabled: false }
      }
    ];
  };

  const options = {
    scale: 2 /*(1800x1200*/,
    type: "png",
    options: {
      chart: {
        type: "spline",
        backgroundColor: "none"
      },
      legend: {
        enabled: false
      },
      title: {
        text: ""
      },
      xAxis: {
        type: "datetime",
        labels: {
          style: {
            fontSize: "15px",
            color: "#fff"
          }
        }
      },
      yAxis: {
        title: {
          text: `Wertentwicklung ${type === "€" ? "(Basis: 500 €)" : "(Prozentual %)"}`,
          style: {
            fontSize: "15px",
            color: "#fff"
          }
        },
        // floor: -9,
        // ceiling: 30,
        gridLineDashStyle: "dash",
        gridLineWidth: 1.5,
        gridLineColor: "#fff",
        plotLines: [
          {
            color: "#fff",
            width: 2,
            value: 0
          }
        ],
        labels: {
          style: {
            fontSize: "15px",
            color: "#fff"
          },
          formatter: function() {
            return this.value + "a";
          }
        }
      },
      plotOptions: {
        series: {
          lineWidth: 3
        }
      },
      colors: [type === "€" ? "#b8e986" : "#ff7f50", "#00afd2"],
      series: buildSeries(data, type)
    }
  };

  return options;
};

export default LineChart;
