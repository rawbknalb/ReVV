import { FETCH_PRICE, FETCH_ERROR } from "../actions/stoxx/types";

const initialState = {};

const stoxx_reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRICE:
      return { ...state };
    case FETCH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default stoxx_reducer;
