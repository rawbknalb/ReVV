import { SWITCH_ROUTE } from "../actions/routes/types";

const initialState = {};

const route_reducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_ROUTE:
      return action.payload;
    default:
      return state;
  }
};

export default route_reducer;
