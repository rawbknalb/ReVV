import {
  FETCH_FORECAST,
  FETCH_HISTORY,
  SELECT_PORTFOLIO,
  COMPUTE_PORTFOLIO,
  SET_HISTORY_RANGE
} from "../actions/simulation/types";

const initialState = {
  portfolio: {
    computed: { portfolioId: 1 },
    selected: { portfolioId: null }
  },
  forecast: {},
  history: [],
  historyRange: 0
};

const simulation_reducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPUTE_PORTFOLIO:
      return {
        ...state,
        portfolio: { ...state.portfolio, computed: action.payload }
      };
    case SELECT_PORTFOLIO:
      return {
        ...state,
        portfolio: { ...state.portfolio, selected: action.payload }
      };
    case FETCH_FORECAST:
      return { ...state, forecast: action.payload };
    case FETCH_HISTORY:
      // check length of history array in order to
      // decide if first element shouldn be copied
      if (state.history.length !== 0) {
        // check if first element is exactly equaly to fetched payload
        // if both objects are equal you only need the first element
        // because there is nothing to compare
        if (
          JSON.stringify(state.history[0]) === JSON.stringify(action.payload)
        ) {
          return { ...state, history: [state.history[0]] };
          // carry the first element allways with you
        } else return { ...state, history: [state.history[0], action.payload] };
      } else {
        return { ...state, history: [...state.history, action.payload] };
      }
    case SET_HISTORY_RANGE:
      // only 
      if (state.historyRange !== action.payload) {
        return { ...state, historyRange: action.payload, history: [] };
      }
    default:
      return state;
  }
};

export default simulation_reducer;
