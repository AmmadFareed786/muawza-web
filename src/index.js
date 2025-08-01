import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // optional if you want to add global styles
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
