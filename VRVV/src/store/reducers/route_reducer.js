import { SWITCH_ROUTE } from "../actions/routes/types";

const initialState = {
  route: ""
};

const route_reducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_ROUTE:
      return { ...state, route: action.payload };
    default:
      return state;
  }
};

export default route_reducer;
