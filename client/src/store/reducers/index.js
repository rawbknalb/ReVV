import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./auth_reducer";
import userReducer from "./user_reducer";
import etfReducer from "./etf_reducer";

const reducers = {
  form: formReducer,
  auth: authReducer,
  user: userReducer,
  etf_data: etfReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
