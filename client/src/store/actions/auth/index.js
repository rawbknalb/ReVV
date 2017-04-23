import axios from "axios";
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, SIGNUP_USER } from "./types";
const API_URL = "http://192.168.2.40:3090";

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
      localStorage.setItem("token", res.data.token);
      dispatch({ type: AUTH_USER, payload: res.data.user });
      // - Save the JWT Token
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
