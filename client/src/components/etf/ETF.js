import React from "react";
import Chart from "./Chart";

const ETF = props => (
  <div>
    <h1>{props.etf.id}</h1>
    <Chart isin={props.etf.id} data={props.etf.data.nav}/>
  </div>
);

export default ETF;
