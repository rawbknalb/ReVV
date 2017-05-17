import {
  FETCH_FORECAST,
  FETCH_HISTORY,
  FETCH_HISTORY_IMAGE,
  SELECT_PORTFOLIO,
  COMPUTE_PORTFOLIO,
  SET_HISTORY_RANGE,
  FETCH_PORTFOLIOS
} from "../actions/simulation/types";

import {
  getSelectedPortfolio,
  createAssetAllocation,
  transformAssetClassNames
} from "../utils/PortfolioCollection";

const initialState = {
  portfolios: {
    metaData: [],
    computed: { portfolioId: 1 },
    selected: { portfolioId: 1, metaData: {} }
  },
  forecast: {},
  history: [],
  historyImages: {},
  historyRange: 36
};

const simulation_reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PORTFOLIOS:
      // transforms each Portfolio from the fetched data from vv server:
      // 1. transforms AssetClass Names
      // 2. creates a new Object Property "assetAllocation" for each portfolio
      const enhancedPortfolioCollection = action.payload.map(portfolio => ({
        ...portfolio,
        funds: transformAssetClassNames(portfolio),
        assetAllocation: createAssetAllocation(portfolio)
      }));

      return {
        ...state,
        portfolios: {
          ...state.portfolios,
          metaData: enhancedPortfolioCollection,
          selected: {
            ...state.portfolios.selected,
            // method to get the selected Portfolio with transformed
            // and enhanced portfolio data
            // pass the portfolio Object and the selected portfolioId
            metaData: getSelectedPortfolio(
              enhancedPortfolioCollection,
              state.portfolios.selected.portfolioId
            )
          }
        }
      };

    case COMPUTE_PORTFOLIO:
      return {
        ...state,
        portfolios: { ...state.portfolios, computed: action.payload }
      };

    case SELECT_PORTFOLIO:
      // after selecting a new portfolio this function filters
      // the selected Portfolio

      return {
        ...state,
        portfolios: {
          ...state.portfolios,
          selected: {
            ...state.portfolios.selected,
            ...action.payload,
            metaData: state.portfolios.metaData.length === 0
              ? {}
              : getSelectedPortfolio(
                  state.portfolios.metaData,
                  action.payload.portfolioId
                )
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

    case FETCH_HISTORY_IMAGE:
      return {
        ...state,
        historyImages: { [state.historyRange]: action.payload }
      };

    default:
      return state;
  }
};

export default simulation_reducer;
