import axios from "axios";
import { FETCH_PRICE, FETCH_ERROR } from "./types";
const API_URL = "https://api.extra-funds.de/api-v1/chart/?currency_id=2&data_type=nav&date_from=2016-02-6&date_to=2017-02-06&format=json&isin=LU0419741177";

export const fetchError = errorMessage => ({
  type: FETCH_ERROR,
  payload: errorMessage
});

export const fetchPrice = (parms) => dispatch => {
  // Submit email and password to the server
  axios
    .get(`${API_URL}`)
    .then(res => {
      // If request is good:
      // - Update state to indicate user is authenticated
      console.log(res)
      dispatch({ type: FETCH_PRICE, payload: res.data });
    })
    .catch(() => {
      // If request is bad:
      // - Show an error to the user
      dispatch(fetchError("Error"));
    });
};
