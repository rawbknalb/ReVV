import { combineReducers } from "redux";
import simulationReducer from "./simulation_reducer";
import routeReducer from "./route_reducer";

const reducers = {
  route: routeReducer,
  simulation_data: simulationReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
