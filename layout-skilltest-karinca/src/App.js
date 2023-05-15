import "./App.css";
import RouteList from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { OidcProvider } from "@axa-fr/react-oidc";

const configuration = {
  client_id: "2e12bb3f-bf55-478b-8cd5-8a0d75e94148",
  redirect_uri: "http://localhost:3000/authentication/callback",
  silent_redirect_uri: "http://localhost:3000/authentication/silent-callback", // Optional activate silent-signin that use cookies between OIDC server and client javascript to restore the session
  scope:
    "AppFramework Accounting.Admin Administrator Accounting.Approval Sales.Admin Timetracking.Admin openid profile",
  authority: "https://test-login.softrig.com",
  service_worker_relative_url: "/OidcServiceWorker.js",
  service_worker_only: true,
};

function App() {
  return (
    <OidcProvider configuration={configuration}>
      <div className="App">
        <Router>
          <RouteList />
        </Router>
      </div>
    </OidcProvider>
  );
}

export default App;
