import { FETCH_USER } from "../actions/user/types";

const initialState = {test: "TEST"};

const user_reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, test: "resr" };
    default:
      return state;
  }
};

export default user_reducer;
