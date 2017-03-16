import axios from "axios";
import { FETCH_USER } from "./types";
const API_URL = "http://localhost:3090";

export const fetchUser = () => dispatch => {
  axios
    .get(`${API_URL}/user`, {
      headers: { authorization: localStorage.getItem("token") }
    })
    .then(res => dispatch({ type: FETCH_USER, payload: res.data.user }));
};
