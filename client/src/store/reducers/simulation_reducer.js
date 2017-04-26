import {
  FETCH_FORECAST,
  FETCH_HISTORY,
  SELECT_PORTFOLIO
} from "../actions/simulation/types";

const initialState = {
  portfolio: {
    computed: { portfolioId: 1 },
    selected: { portfolioId: null }
  },
  forecast: {},
  history: []
};

const simulation_reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PORTFOLIO:
      return {
        ...state,
        portfolio: { ...state.portfolio, selected: action.payload }
      };
    case FETCH_FORECAST:
      return { ...state, forecast: action.payload };
    case FETCH_HISTORY:
      return { ...state, history: [action.payload] };
    default:
      return state;
  }
};

export default simulation_reducer;
