import { SWITCH_ROUTE } from "../actions/routes/types";

const initialState = {
  currentRoute: "enter",
  introFinished: false
};

const route_reducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_ROUTE:
      return { ...state, currentRoute: action.payload };
    default:
      return state;
  }
};

export default route_reducer;
