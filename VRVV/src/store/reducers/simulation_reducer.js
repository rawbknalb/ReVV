import {
  FETCH_FORECAST,
  FETCH_HISTORY,
  CHART_REQUESTING,
  FETCH_PORTFOLIO_CHARTS,
  FETCH_ASSET_ALLOCATION_IMAGE,
  SET_SELECTED_PORTFOLIO,
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
  portfolioCharts: [],
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

    case SET_SELECTED_PORTFOLIO:
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
        portfolioCharts: [],
        selectedPortfolioVariation: { variation: "" },
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

      
    /**
     * Each time a Chart is requested the portfolioCharts Array gets a new element
     * with the status "requesting". If a new Chart is requested but the portfolioCharts
     * Array has already some charts (no "requesting" element found), the function 
     * catches this case and creates a new Array with one "requesting " element.
     * The following calls will copy the Array and add a new "requesting element". 
     */
    case CHART_REQUESTING:
      return {
        ...state,
        portfolioCharts: state.portfolioCharts.filter(
          img => img === "requesting"
        ).length === 0
          ? ["requesting"]
          : [...state.portfolioCharts, "requesting"]
      };

    case FETCH_PORTFOLIO_CHARTS:
      return {
        ...state,
        portfolioCharts: action.payload
      };

    case FETCH_ASSET_ALLOCATION_IMAGE:
      return {
        ...state,
        portfolioCharts: {
          ...state.portfolioCharts,
          assetAllocation: action.payload
        }
      };

    default:
      return state;
  }
};

export default simulation_reducer;
