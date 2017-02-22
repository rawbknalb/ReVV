import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./auth_reducer";
import stoxxReducer from "./stoxx_reducer";

const reducers = {
  form: formReducer,
  auth: authReducer,
  stoxx: stoxxReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
