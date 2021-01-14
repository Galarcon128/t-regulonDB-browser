import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ApolloProvider } from "@apollo/react-hooks";
import Client from "./conf/apollo/apollo_client";
import "./regulondbGlobalStyle.css";

const main = document.getElementById("root");
const renderOrHydrate = main.innerHTML.trim().length ? "hydrate" : "render";

ReactDOM[renderOrHydrate](
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <ApolloProvider client={Client}>
          <App />
        </ApolloProvider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,
  main
);
