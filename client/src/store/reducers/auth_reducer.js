import {
  AUTH_USER,
  UNAUTH_USER,
  SIGNUP_USER,
  AUTH_ERROR
} from "../actions/auth/types";

const initialState = { isAuthenticated: false };

const auth_reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
    case SIGNUP_USER:
      return { ...state, isAuthenticated: true, errorMessage: "", user: action.payload };
    case UNAUTH_USER:
      return { ...state, isAuthenticated: false, errorMessage: "" };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default auth_reducer;
