import {
  FETCH_FORECAST,
  FETCH_HISTORY,
  SELECT_PORTFOLIO,
  COMPUTE_PORTFOLIO,
  SET_HISTORY_RANGE,
  FETCH_PORTFOLIO_METADATA
} from "../actions/simulation/types";

const initialState = {
  portfolios: {
    metaData: [],
    computed: { portfolioId: 1 },
    selected: { portfolioId: null, metaData: {} }
  },
  forecast: {},
  history: [],
  historyRange: 36
};
const simulation_reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PORTFOLIO_METADATA:
      const selectedPortfolioMeta = action.payload.filter(
        portfolio => portfolio.id === state.portfolios.selected.portfolioId
      );
      console.log(selectedPortfolioMeta);
      return {
        ...state,
        portfolios: {
          ...state.portfolios,
          metaData: action.payload,
          selected: {
            ...state.portfolios.selected,
            metaData: selectedPortfolioMeta[0]
          }
        }
      };

    case COMPUTE_PORTFOLIO:
      return {
        ...state,
        portfolios: { ...state.portfolios, computed: action.payload }
      };

    case SELECT_PORTFOLIO:
      const newSelectedPortfolioMeta = state.portfolios.metaData.filter(
        portfolio => portfolio.id === action.payload.portfolioId
      );
      return {
        ...state,
        portfolios: {
          ...state.portfolios,
          selected: {
            ...state.portfolios.selected,
            ...action.payload,
            metaData: newSelectedPortfolioMeta[0]
          }
        }
      };

    case FETCH_FORECAST:
      return { ...state, forecast: action.payload };

    case FETCH_HISTORY:
      return { ...state, history: action.payload };

    case SET_HISTORY_RANGE:
      // only
      if (state.historyRange !== action.payload) {
        return { ...state, historyRange: action.payload };
      }
      return;

    default:
      return state;
  }
};

export default simulation_reducer;
