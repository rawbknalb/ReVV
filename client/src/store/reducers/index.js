import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./auth_reducer";
import allocationReducer from "./allocation_reducer";
import etfReducer from "./etf_reducer";

const reducers = {
  form: formReducer,
  auth: authReducer,
  assetAllocation: allocationReducer,
  etf_data: etfReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
