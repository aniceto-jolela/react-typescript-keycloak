import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const eventLogger = (event: unknown, error: unknown) => {
  console.log("onKeycloakEvent", event, error);
};

const tokenLogger = (tokens: unknown) => {
  console.log("onKeycloakTokens", tokens);
};

root.render(
  <ReactKeycloakProvider
    initOptions={{ onLoad: "login-required" }}
    authClient={keycloak}
    onEvent={eventLogger}
    onTokens={tokenLogger}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReactKeycloakProvider>
);

