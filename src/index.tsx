import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './Main.scss';

import { ApolloProvider } from "@apollo/client";
import client from "./apollo/apollo-client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);
