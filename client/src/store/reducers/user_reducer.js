import { FETCH_USER } from "../actions/user/types";

const initialState = {};

const user_reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, ...action.payload };
    case "UNAUTH_USER":
      return { ...state, isAuthenticated: false, errorMessage: "" };
    case "AUTH_ERROR":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default user_reducer;

