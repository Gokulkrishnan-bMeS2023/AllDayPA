import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Providers } from "./Provider";
import "./styles/global-styles.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
