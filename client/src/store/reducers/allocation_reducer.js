import {
  GET_ALLOCATION
} from "../actions/assetAllocation/types";

const initialState = { };

const allocation_reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALLOCATION:
      return { state, ...action.payload };
    default:
      return state;
  }
};

export default allocation_reducer;
