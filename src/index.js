import React from "react";
import store from "./store";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
