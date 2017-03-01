import React, { Component } from "react";
import Highcharts from "highcharts";

class Chart extends Component {
  componentDidMount() {
    const data = this.props.data.map(dataPoint => dataPoint.value);
    const values = data.filter(value => value < 100);
    const dates = this.props.data.map(dataPoint => dataPoint.date);
    const config = {
      chart: {
        zoomType: "x"
      },
      title: {
        text: "ETF Infoz"
      },
      xAxis: {
        title: {
          text: "X Axis"
        }
      },
      yAxis: {
        title: {
          text: "ETF yAxizz"
        }
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [
                1,
                Highcharts.Color(Highcharts.getOptions().colors[0])
                  .setOpacity(0)
                  .get("rgba")
              ]
            ]
          },
          marker: {
            radius: 2
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          threshold: null
        }
      },
      series: [
        {
          name: "ETFz",
          type: "area",
          data: values
        }
      ]
    };
    console.log(values);
    this.chart = new Highcharts.Chart(this.props.isin, config);
  }

  render() {
    return (
      <div id={this.props.isin}>
        <h1>Chart</h1>
      </div>
    );
  }
}

export default Chart;
