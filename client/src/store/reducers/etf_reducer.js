import { FETCH_PRICE, FETCH_ERROR } from "../actions/etf/types";

const initialState = {};

const etf_reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRICE:
      return {
        ...state,
        [action.payload.isin]: {
          id: action.payload.isin,
          data: action.payload.data
        }
      };
    case FETCH_ERROR:
      return { ...state };
    default:
      return state;
  }
};

export default etf_reducer;
