import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { loadProducts } from "./Api";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import store from "./JS/Store";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  //<React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
);
