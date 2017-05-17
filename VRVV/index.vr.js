import React from "react";
import { AppRegistry } from "react-vr";
import createHistory from "history/createMemoryHistory";
const history = createHistory();

// Components
import App from "./src/container/App";
// Router
import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware
} from "connected-react-router";

// Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";

//import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
// Import Root Reducer
import rootReducer from "./src/store/reducers";
// Middlewares
const middlewares = [reduxThunk, routerMiddleware(history)];
const composer = process.env.NODE_ENV !== "production"
  ? composeWithDevTools
  : compose;
// Create the store
const store = createStore(
  connectRouter(history)(rootReducer),
  composeWithDevTools(applyMiddleware(...middlewares))
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
