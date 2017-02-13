import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./auth/auth_reducer"

const reducers = {
  form: formReducer,
  auth: authReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
