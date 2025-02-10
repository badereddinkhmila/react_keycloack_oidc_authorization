import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
 url: process.env.KEYCLOAK_SERVER_URL ?? "",
 realm: process.env.KEYCLOAK_SERVER_REALM ?? "",
 clientId: process.env.KEYCLOAK_CLIENTID ?? "",
});

export default keycloak;