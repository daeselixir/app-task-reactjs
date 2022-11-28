import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import "normalize.css";
import App from "./App";
import { getMonth, getYear } from "date-fns";





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
