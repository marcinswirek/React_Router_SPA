// Task 1 ended
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import DevTools from "./DevTools";

ReactDOM.render(
  <Provider store={store}>
    <div>
      {" "}
      <h1>Project init</h1>
      <DevTools />,
    </div>
  </Provider>,
  document.getElementById("root")
);
