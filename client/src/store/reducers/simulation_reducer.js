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
      // after fetching all portfolios: this function filters out from the payload
      // the selected Portfolio into a new Array [{selectedPortfolio}]
      const selectedPortfolioMeta = action.payload
        .filter(
          portfolio => portfolio.id === state.portfolios.selected.portfolioId
        )
        .reduce(portfolio => ({ ...portfolio }));

      const createAssetAllocation = portfolio => {
        return portfolio.funds.reduce((obj, fund) => {
          const assetClassName = fund.assetClass;
          const { sharePercentage } = fund;

          return {
            ...obj,
            [assetClassName]: obj[assetClassName] !== undefined
              ? sharePercentage + obj[assetClassName]
              : sharePercentage
          };
        }, {});
      };

      const enhancedPortfolioCollection = action.payload.map(portfolio => ({
        ...portfolio,
        assetAllocation: createAssetAllocation(portfolio)
      }));
      console.log(enhancedPortfolioCollection);

      return {
        ...state,
        portfolios: {
          ...state.portfolios,
          metaData: enhancedPortfolioCollection,
          selected: {
            ...state.portfolios.selected,
            metaData: selectedPortfolioMeta
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
      const createSelectedPortfolioMeta = () => {
        if (state.portfolios.metaData.length === 0) {
          return;
        }
        return state.portfolios.metaData
          .filter(portfolio => portfolio.id === action.payload.portfolioId)
          .reduce(portfolio => ({ ...portfolio }));
      };

      return {
        ...state,
        portfolios: {
          ...state.portfolios,
          selected: {
            ...state.portfolios.selected,
            ...action.payload,
            metaData: createSelectedPortfolioMeta()
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
