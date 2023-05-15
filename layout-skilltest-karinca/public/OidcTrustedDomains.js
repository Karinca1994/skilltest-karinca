// Add bellow trusted domains, access tokens will automatically injected to be send to
// trusted domain can also be a path like https://www.myapi.com/users,
// then all subroute like https://www.myapi.com/useers/1 will be authorized to send access_token to.

// Domains used by OIDC server must be also declared here
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const trustedDomains = {
  default: [
    "https://test-login.softrig.com",
    "https://test-login.softrig.com/connect/userinfo",
    "https://test-login.softrig.com/connect/revocation",
    "https://test-login.softrig.com/connect/token",
  ],
  config_classic: ["https://test-login.softrig.com"],
  config_without_silent_login: ["https://test-login.softrig.com"],
  config_without_refresh_token: ["https://test-login.softrig.com"],
  config_without_refresh_token_silent_login: ["https://test-login.softrig.com"],
  config_with_hash: ["https://test-login.softrig.com"],
};
