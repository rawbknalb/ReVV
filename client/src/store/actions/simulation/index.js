import axios from "axios";
import { FETCH_FORECAST, FETCH_HISTORY, SELECT_PORTFOLIO } from "./types";

const FORECAST_API_URL =
  "https://service.visualvest.de/anlageziel-functional-service/simulation";
const PORTFOLIO_HISTORY_API_URL =
  "https://service.visualvest.de/portfolio-functional-service/history/portfolio";

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

export const fetchHistoryData = (portfolioId, months) => async dispatch => {
  try {
    const historyData = await axios.get(
      `${PORTFOLIO_HISTORY_API_URL}/${portfolioId}${months ? `?months=${months}` : ""}`
    );

    dispatch({ type: FETCH_HISTORY, payload: historyData.data });
  } catch (err) {
    console.warn(err);
  }
};

export const selectPortfolio = portfolioId => ({
  type: SELECT_PORTFOLIO,
  payload: { portfolioId: portfolioId }
});
