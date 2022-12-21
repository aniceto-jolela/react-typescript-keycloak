import Keycloak from "keycloak-js";

const keycloakConfig = {
  realm: "React-Typescript",
  url: "http://0.0.0.0:8080/",
  clientId: "react-ts",
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
