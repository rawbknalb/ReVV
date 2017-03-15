import axios from "axios";
import { GET_ALLOCATION } from "./types";
import { getAllocation } from "../assetAllocation";
const API_URL = "http://localhost:3090";

export const fetchAllocation = assetAllocation => ({
  type: GET_ALLOCATION,
  payload: assetAllocation
});

export const fetchAssetAllocation = () => dispatch => {
  // Submit email and password to the server
  axios
    .get(`${API_URL}/user/asset-allocation`, {
      headers: { authorization: localStorage.getItem("token") }
    })
    .then(res => console.log(res));
};
