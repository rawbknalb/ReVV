import axios from "axios";
import {
  FETCH_FORECAST,
  FETCH_HISTORY,
  FETCH_HISTORY_IMAGE,
  SET_SELECTED_PORTFOLIO,
  UNSELECT_PORTFOLIO,
  SELECT_PORTFOLIO_VARIATION,
  COMPUTE_PORTFOLIO,
  SET_HISTORY_RANGE,
  FETCH_PORTFOLIOS
} from "./types";

import prepareLineChart from "../../utils/prepareLineChart";

const FORECAST_API_URL =
  "https://service.visualvest.de/anlageziel-functional-service/simulation";
const PORTFOLIO_HISTORY_API_URL =
  "https://service.visualvest.de/portfolio-functional-service/history/portfolio";
const PORTFOLIO_METADATA_API_URL =
  "https://service.visualvest.de/portfolio-functional-service/portfolios";
const PORTFOLIO_HISTORY_IMG_API_URL = "http://localhost:3090/history";

export const fetchForecast = (
  portfolioId,
  balance,
  monthlyRate,
  targetAmount,
  timeFrameYears
) => async dispatch => {
  const anlageziel = {
    productType: "PORTFOLIO",
    portfolioId: portfolioId,
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

export const setSelectedPortfolio = portfolioId => ({
  type: SET_SELECTED_PORTFOLIO,
  payload: { portfolioId: portfolioId }
});

export const unselectPortfolio = () => ({ type: UNSELECT_PORTFOLIO });

export const selectPortfolioVariation = variation => ({
  type: SELECT_PORTFOLIO_VARIATION,
  payload: variation
});

// Fetch History Data from VV Service
export const fetchHistoryData = (
  portfolioId,
  months = 36,
  images
) => async dispatch => {
  try {
    // First allways fetch History for selected Portfolio
    const selectedPortfolioHistory = await axios.get(
      `${PORTFOLIO_HISTORY_API_URL}/${portfolioId}${months ? `?months=${months}` : ""}`
    );
    /**
     * Object contains: 
     * dateFrom: String, 
     * dateTo: String,
     * history: Array
     */
    const historyData = [selectedPortfolioHistory.data];
    dispatch({ type: FETCH_HISTORY, payload: historyData });
    // If images already exist (!= null), fetch historyImages
    if (images !== null) {
      const percentagePerformance = prepareLineChart(historyData, "%");
      const currencyPerformance = prepareLineChart(historyData, "€");

      const percentagePerformanceImage = await axios.get(
        "http://localhost:3090/history",
        {
          params: percentagePerformance
        }
      );
      const currencyPerformanceImage = await axios.get(
        "http://localhost:3090/history",
        {
          params: currencyPerformance
        }
      );

      dispatch({
        type: FETCH_HISTORY_IMAGE,
        payload: [
          percentagePerformanceImage.data,
          currencyPerformanceImage.data
        ]
      });
    }
  } catch (err) {
    console.warn(err);
  }
};

// get History Image from the Highcharts export server running on localhost
export const fetchHistoryImages = historyData => async dispatch => {
  try {
    const percentagePerformance = prepareLineChart(historyData, "%");
    const currencyPerformance = prepareLineChart(historyData, "€");

    const percentagePerformanceImage = await axios.get(
      "http://localhost:3090/history",
      {
        params: percentagePerformance
      }
    );
    const currencyPerformanceImage = await axios.get(
      "http://localhost:3090/history",
      {
        params: currencyPerformance
      }
    );

    dispatch({
      type: FETCH_HISTORY_IMAGE,
      payload: [percentagePerformanceImage.data, currencyPerformanceImage.data]
    });
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

// fetches Portfolio meta data: pass portfolioId to fetch a specific portfolio
// if no portfolioId gets passed fetch *all* portfolio meta data
export const fetchPortfolios = (portfolioId = "all") => async dispatch => {
  try {
    const allPortfolios = await axios.get(
      `${PORTFOLIO_METADATA_API_URL}/${portfolioId}`
    );
    dispatch({
      type: FETCH_PORTFOLIOS,
      payload: allPortfolios.data
    });
  } catch (err) {
    console.warn(err);
  }
};
