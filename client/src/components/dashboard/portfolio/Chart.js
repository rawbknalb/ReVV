import React from "react";
import PortfolioChart from "../../charts/DonutChart";

const ROB_FOLIO_1 = {
  name: "RobFolio 1",
  bonds: {
    weight: 80,
    funds: [
      {
        isin: "LU0444605645",
        name: "ComStage iBoxx EUR Liquid Sovereigns Diversified Overall TR UCITS ETF",
        weight: 100
      }
    ]
  },
  stocks: {
    weight: 20,
    funds: [
      {
        isin: "LU0392494562",
        name: "ComStage MSCI World TRN UCITS ETF",
        weight: 50
      },
      {
        isin: "LU0635178014",
        name: "ComStage MSCI Emerging Markets TRN UCITS ETF",
        weight: 50
      }
    ]
  }
};

const Chart = props => <div><PortfolioChart data={ROB_FOLIO_1}/></div>

export default Chart;