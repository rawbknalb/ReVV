import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

// Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// Import Root Reducer
import rootReducer from "./store/reducers/auth";

// Create the store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);
