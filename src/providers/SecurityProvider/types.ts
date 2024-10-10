import { KeycloakLoginOptions } from "keycloak-js";

export type User = {
  acr: string;
  at_hash: string;
  aud: string;
  auth_time: number;
  azp: string;
  email: string;
  email_verified: boolean;
  exp: number;
  family_name: string;
  given_name: string;
  iat: number;
  iss: string;
  jti: string;
  name: string;
  nonce: string;
  preferred_username: string;
  session_state: string;
  sid: string;
  sub: string;
  typ: string;
};

export type SecurityContextType = {
  isInitialized: boolean;
  isAuthenticated: () => boolean;
  logout: () => void;
  goToLogin: (options?: KeycloakLoginOptions | undefined) => Promise<void>;
  user: User | undefined;
  hasRealmRole: (role: string) => boolean;
  hasClientRole: (role: string, resource?: string) => boolean;
};

export type SecurityProviderProps = {
  children: React.ReactElement;
};

export type KeycloakContextProps = {
  realm: string;
  clientId: string;
  url: string;
  children: React.ReactElement;
};
