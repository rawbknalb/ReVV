import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "./Chart";

class ForeCastChart extends Component {
  // console.log(props);
  values = this.rops.data.map(value => value.percentage);
  dates = this.props.data.map(date => date.date);

  // series = [
  //   {
  //     name: "Angebotenes Portfolio",
  //     type: "areaspline",
  //     data: values
  //     //dataLabels: { enabled: false }
  //   }
  // ];

  // options = {
  //   chart: {
  //     backgroundColor: "rgba(0, 0, 0, 0)"
  //   },
  //   title: { text: "" },
  //   xAxis: {},
  //   yAxis: {
  //     title: {
  //       text: ""
  //     }
  //   },
  //   plotOptions: {
  //     series: {
  //       color: "rgb(184, 233, 134)"
  //     }
  //   },
  //   series: series
  // };
  render() {
    return (
      <Chart
        container="asset-allocation-performance-history"
        options={{}}
      />
    );
  }
}

const mapStateToProps = state => ({
  foreCast: state.simulation_data
});

export default connect(mapStateToProps)(ForeCastChart);
