import axios from "axios";
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, SIGNUP_USER } from "./types";
import { getAllocation } from "../assetAllocation";
const API_URL = "http://localhost:3090";

export const authError = errorMessage => ({
  type: AUTH_ERROR,
  payload: errorMessage
});

export const signInUser = ({ email, password }) => dispatch => {
  // Submit email and password to the server
  axios
    .post(`${API_URL}/signin`, { email, password })
    .then(res => {
      // If request is good:
      // 1. Update state to indicate user is authenticated
      dispatch({ type: AUTH_USER });
      // - Save the JWT Token
      localStorage.setItem("token", res.data.token);
    })
    .catch(() => {
      // If request is bad:
      // - Show an error to the user
      dispatch(authError("Bad Login Info"));
    });
};

export const signUpUser = ({ email, password }) => dispatch => {
  // Submit email and password to the server
  axios
    .post(`${API_URL}/signup`, { email, password })
    .then(res => {
      dispatch({ type: SIGNUP_USER });
      localStorage.setItem("token", res.data.token);
    })
    .catch(({ response }) => dispatch(authError(response.data.error)));
};

export const signOutUser = () => {
  // - Remove the JWT Token
  localStorage.removeItem("token");
  return { type: UNAUTH_USER };
};
