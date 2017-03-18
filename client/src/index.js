import React from "react";
import ReactDOM from "react-dom";

// Components
import App from "./components/App";

// React Router
import { BrowserRouter as Router, Route } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";

// Import Root Reducer
import rootReducer from "./store/reducers";

// Create the store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

const token = localStorage.getItem("token");
if (token) {
  store.dispatch({ type: "AUTH_USER" });
}

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  rootEl
);
