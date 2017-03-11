import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import ETFSearchForm from "./forms/ETFSearchForm";
import ETF from "./ETF";

const renderETF = etf_data => {
  const etf_data_array = _.valuesIn(etf_data);
  return etf_data_array.map(etf => {
    return <ETF etf={etf} key={etf.id} />;
  });
};

const Dashboard = props => (
  <div>
    <h1>ETF Search (test_isin: FR0012951044, LU0392494562)</h1>
    <div className="panel panel-default">
      <div className="panel-body">
        <ETFSearchForm />
        {renderETF(props.etf_data)}
      </div>
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    etf_data: state.etf_data
  };
};

export default connect(mapStateToProps)(Dashboard);
