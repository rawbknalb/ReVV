import axios from "axios";
import {
  FETCH_FORECAST,
  FETCH_HISTORY,
  SELECT_PORTFOLIO,
  COMPUTE_PORTFOLIO,
  SET_HISTORY_RANGE,
  FETCH_PORTFOLIO_METADATA
} from "./types";

const FORECAST_API_URL =
  "https://service.visualvest.de/anlageziel-functional-service/simulation";
const PORTFOLIO_HISTORY_API_URL =
  "https://service.visualvest.de/portfolio-functional-service/history/portfolio";

const PORTFOLIO_METADATA_API_URL =
  "https://service.visualvest.de/portfolio-functional-service/portfolios";

export const fetchForecast = (
  portfolioID,
  balance,
  monthlyRate,
  targetAmount,
  timeFrameYears
) => async dispatch => {
  const anlageziel = {
    productType: "PORTFOLIO",
    portfolioId: portfolioID,
    balance: balance || 0,
    monthlyRate: monthlyRate || 25,
    targetAmount: targetAmount || null,
    timeFrameYears: timeFrameYears || null
  };

  try {
    const foreCastData = await axios.post(FORECAST_API_URL, {
      anlageziel
    });

    dispatch({ type: FETCH_FORECAST, payload: foreCastData.data });
  } catch (err) {
    console.warn(err);
  }
};

export const selectPortfolio = portfolioId => ({
  type: SELECT_PORTFOLIO,
  payload: { portfolioId: portfolioId }
});

export const fetchHistoryData = (
  computedPortfolio,
  selectedPortfolio,
  months
) => async dispatch => {
  try {
    const HistoryData = [];
    // First allways fetch History for computed Portfolio
    const computedPortfolioHistory = await axios.get(
      `${PORTFOLIO_HISTORY_API_URL}/${computedPortfolio}${months ? `?months=${months}` : ""}`
    );

    HistoryData.push(computedPortfolioHistory.data);

    // Next only fetch history for selected Portfolio
    // if selected Portfolio is not equal to the computed Portfolio
    if (computedPortfolio !== selectedPortfolio) {
      const selectedPortfolioHistory = await axios.get(
        `${PORTFOLIO_HISTORY_API_URL}/${selectedPortfolio}${months ? `?months=${months}` : ""}`
      );
      HistoryData.push(selectedPortfolioHistory.data);
    }

    dispatch({ type: FETCH_HISTORY, payload: HistoryData });
  } catch (err) {
    console.warn(err);
  }
};

export const computePortfolio = portfolioId => ({
  type: COMPUTE_PORTFOLIO,
  payload: { portfolioId: portfolioId }
});

export const setHistoryRange = months => ({
  type: SET_HISTORY_RANGE,
  payload: months
});

export const fetchPortfolioMetadata = (
  portfolioId = "all"
) => async dispatch => {
  try {
    const PortfolioMetaData = await axios.get(
      `${PORTFOLIO_METADATA_API_URL}/${portfolioId}`
    );
    dispatch({
      type: FETCH_PORTFOLIO_METADATA,
      payload: PortfolioMetaData.data
    });
  } catch (err) {
    console.warn(err);
  }
};
