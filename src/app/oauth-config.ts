import { AuthConfig } from 'angular-oauth2-oidc';

export const oauthConfig: AuthConfig = {
  // src: https://angular.de/artikel/oauth-odic-plugin/
  // Url des Authorization-Servers
  issuer: 'https://idp.cloudness.dev/auth/realms/ngx-admin',

  // Url der Angular-Anwendung
  // An diese URL sendet der Authorization-Server den Access Code
  redirectUri: window.location.origin + '/pages/overview',

  // Name der Angular-Anwendung
  clientId: 'ngx-admin',

  // Rechte des Benutzers, die die Angular-Anwendung wahrnehmen möchte
  scope: 'openid profile email',

  // Code Flow (PKCE ist standardmäßig bei Nutzung von Code Flow aktiviert)
  responseType: 'code'

};

