import { GET_FORECAST } from "../actions/simulation/types";

const initialState = {};

const simulation_reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FORECAST:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default simulation_reducer;

