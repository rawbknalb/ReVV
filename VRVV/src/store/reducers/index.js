import { combineReducers } from "redux";
// import authReducer from "./auth_reducer";
// import userReducer from "./user_reducer";
// import etfReducer from "./etf_reducer";
import simulationReducer from "./simulation_reducer";

const reducers = {
  // auth: authReducer,
  // user: userReducer,
  // etf_data: etfReducer,
  simulation_data: simulationReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
