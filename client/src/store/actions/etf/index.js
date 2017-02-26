import axios from "axios";
import { FETCH_PRICE, FETCH_ERROR } from "./types";
const API_URL = "https://api.extra-funds.de/api-v1/chart/";

export const fetchError = errorMessage => ({
  type: FETCH_ERROR,
  payload: errorMessage
});

export const fetchPrice = ({ isin }) => dispatch => {
  // Submit email and password to the server
  axios
    .get(`${API_URL}`, {
      params: {
        data_type: "nav",
        format: "json",
        isin: isin
      }
    })
    .then(res => {
      // If request is good:
      // - Update state to indicate user is authenticated
      console.log(res);
      dispatch({
        type: FETCH_PRICE,
        payload: { isin: isin, data: res.data.results }
      });
    })
    .catch(() => {
      // If request is bad:
      // - Show an error to the user
      dispatch(fetchError("Error"));
    });
};
