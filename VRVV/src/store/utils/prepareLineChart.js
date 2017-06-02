const LineChart = (data, unit) => {
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

  const convertPercentage = (value, unit) =>
    value !== 0 ? parseFloat(value.toFixed(2)) : value;

  /**
   * Takes the whole historyData-Array as an argument.
   * Maps over each element and creates a new Array 
   * [Date, Percentage]. Uses convertDate() and convertPercentage()
   */
  const convertHistoryData = historyData => {
    return historyData.map(val => [
      convertDate(val.date),
      convertPercentage(val.percentage)
    ]);
  };

  const buildSeries = data => {
    console.log(data[0]);
    // if only 1 portfolio-history exists in the store
    // create this portfolio-history object by using
    // convertHistoryData - date and percentage
    const portfolio_1 = {
      ...data[0],
      history: convertHistoryData(data[0].history)
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
          type: "line",
          data: portfolio_1.history
          //dataLabels: { enabled: false }
        },
        {
          name: "Portfolio Name",
          type: "line",
          data: portfolio_2.history
          //dataLabels: { enabled: false }
        }
      ];
    }
    // return only 1 portfolio-history object
    return [
      {
        name: "Portfolio Name",
        type: "line",
        data: portfolio_1.history
        //dataLabels: { enabled: false }
      }
    ];
  };

  const options = {
    scale: 2.5 /*(1800x1200*/,
    type: "png",
    options: {
      chart: {
        type: "line",
        backgroundColor: ""
        // height: "100%"
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
          text: ""
        },
        floor: -9,
        ceiling: 30,
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
          lineWidth: 1.5
        }
      },
      colors: ["#b8e986", "#00afd2"],
      series: buildSeries(data)
    }
  };

  return options;
};

export default LineChart;
