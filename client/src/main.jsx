import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-j2nfgvbzmyujpy4m.us.auth0.com"
    clientId="0rj4xmrL3nAwdaVjcxYcOXG3W4J4Fjgk"
    authorizationParams={{
      redirect_uri: "https://homyz-client.vercel.app"
    }}
    audience="https://homyz-five.vercel.app"
    scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
