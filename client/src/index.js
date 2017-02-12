import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Components
import App from "./components/App";

// React Router
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// Import Root Reducer
import rootReducer from "./store/reducers";

// Create the store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <Route path="/" component={App} />
    </Router>
  </Provider>,
  rootEl
);
