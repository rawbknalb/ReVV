import axios from "axios";
const API_URL = "http://localhost:3090";

export const signInUser = ({ email, password }) => dispatch => {
  // Submit email and password to the server
  axios.post(`${API_URL}/signin`, { email, password });
  // If request is good:
  // - Update state to indicate user is authenticated
  // - Save the JWT Token
  // - Redirect to route '/portfolio'
  // If request is bad:
  // - Show an error to the user
};
