import axios from "axios";
import { GET_FORECAST } from "./types";
const FORECAST_API_URL =
  "https://service.visualvest.de/anlageziel-functional-service/simulation";

export const getForecast = (
  portfolioID,
  balance,
  monthlyRate,
  targetAmount,
  timeFrameYears
) => dispatch => {
  axios
    .post(FORECAST_API_URL, {
      anlageziel: {
        productType: "PORTFOLIO",
        portfolioId: portfolioID,
        balance: balance || 0,
        monthlyRate: monthlyRate || 25,
        targetAmount: targetAmount || null,
        timeFrameYears: timeFrameYears || null
      }
    })
    .then(res => dispatch({ type: GET_FORECAST, payload: res.data }));
};
