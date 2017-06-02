import {
  FETCH_FORECAST,
  FETCH_HISTORY,
  FETCH_HISTORY_IMAGE,
  SELECT_PORTFOLIO,
  UNSELECT_PORTFOLIO,
  SELECT_PORTFOLIO_VARIATION,
  COMPUTE_PORTFOLIO,
  SET_HISTORY_RANGE,
  FETCH_PORTFOLIOS
} from "../actions/simulation/types";

import {
  addPortfolioTitle,
  getSelectedPortfolio,
  createAssetAllocation,
  transformAssetClassNames,
  filterByVariation
} from "../utils/PortfolioCollection";

const initialState = {
  portfolios: {
    metaData: [],
    byVariation: [],
    computed: { portfolioId: null },
    selected: { portfolioId: null, metaData: {} }
  },
  selectedPortfolioVariation: { variation: "" },
  forecast: {},
  history: [],
  historyImage: null,
  historyRange: 36
};

const simulation_reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PORTFOLIOS:
      /** 
     * transforms each Portfolio from the fetched data from VisualVest server:
     * 1. transforms AssetClass Names
     * 2. creates a new Object Property "assetAllocation" for each portfolio
     * 3. adds a new title property
     */
      const enhancedPortfolioCollection = action.payload.map(portfolio => ({
        ...portfolio,
        funds: transformAssetClassNames(portfolio),
        assetAllocation: createAssetAllocation(portfolio),
        title: addPortfolioTitle(portfolio)
      }));

      return {
        ...state,
        portfolios: {
          ...state.portfolios,
          metaData: enhancedPortfolioCollection,
          selected: {
            ...state.portfolios.selected
          }
        }
      };
    // case COMPUTE_PORTFOLIO:
    //   return {
    //     ...state,
    //     portfolios: { ...state.portfolios, computed: action.payload }
    //   };


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

    case UNSELECT_PORTFOLIO:
      return {
        ...state,
        historyImage: null,
        portfolios: {
          ...state.portfolios,
          selected: { portfolioId: null, metaData: [] }
        }
      };

    case SELECT_PORTFOLIO_VARIATION:
      return {
        ...state,
        portfolios: {
          ...state.portfolios,
          byVariation: filterByVariation(
            state.portfolios.metaData,
            action.payload
          )
        },
        selectedPortfolioVariation: { variation: action.payload }
      };

    case FETCH_FORECAST:
      return { ...state, forecast: action.payload };

    /**
     * Returns a new Object with a new history property inside 
     * metaData of the selected Portfolio in store
     */
    case FETCH_HISTORY:
      return {
        ...state,
        portfolios: {
          ...state.portfolios,
          selected: {
            ...state.portfolios.selected,
            metaData: {
              ...state.portfolios.selected.metaData,
              history: action.payload
            }
          }
        }
      };

    case SET_HISTORY_RANGE:
      // only
      if (state.historyRange !== action.payload) {
        return { ...state, historyRange: action.payload };
      }
      return;

    case FETCH_HISTORY_IMAGE:
      return {
        ...state,
        historyImage: action.payload
      };

    default:
      return state;
  }
};

export default simulation_reducer;
