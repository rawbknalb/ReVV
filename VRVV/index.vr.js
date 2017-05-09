import React from "react";
import { AppRegistry } from "react-vr";
import createHistory from "history/createMemoryHistory";
const history = createHistory();

// Components
import App from "./src/components/App";
// Router
import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware
} from "connected-react-router";
// Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
// Import Root Reducer
import rootReducer from "./src/store/reducers";
// Middlewares
const middlewares = [reduxThunk];
const composer = process.env.NODE_ENV !== "production"
  ? composeWithDevTools
  : compose;
// Create the store
const store = createStore(
  rootReducer,
  composer(applyMiddleware(...middlewares))
);

export default class VRVV extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    );
  }
}

AppRegistry.registerComponent("VRVV", () => VRVV);
