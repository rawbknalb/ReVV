import { FETCH_PRICE, FETCH_ERROR } from "../actions/stoxx/types";

const initialState = {};

const stoxx_reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRICE:
      return { ...state, [action.payload.isin]: action.payload.data };
    case FETCH_ERROR:
      return { ...state };
    default:
      return state;
  }
};

export default stoxx_reducer;
