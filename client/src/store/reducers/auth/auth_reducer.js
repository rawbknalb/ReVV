import { AUTH_USER, UNAUTH_USER } from "../../actions/types";

const auth_reducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, isAuthenticated: true };
    case UNAUTH_USER:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

export default auth_reducer;
