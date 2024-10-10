import {
  KeycloakContextProps,
  SecurityContextType,
  SecurityProviderProps,
  User,
} from "./types";
import { ReactKeycloakProvider, useKeycloak } from "@react-keycloak/web";
import Keycloak from "keycloak-js";
import { createContext, useContext, useEffect } from "react";

export const AuthProvider: React.FC<KeycloakContextProps> = ({
  children,
  ...props
}) => {
  return (
    <ReactKeycloakProvider authClient={new Keycloak(props)}>
      <SecurityProvider>{children}</SecurityProvider>
    </ReactKeycloakProvider>
  );
};

const SecurityContext = createContext<SecurityContextType>({
  isInitialized: false,
  user: {} as User,
  logout: () => null,
  goToLogin: async () => {},
  hasClientRole: () => false,
  isAuthenticated: () => false,
  hasRealmRole: () => false,
});

const SecurityProvider: React.FC<SecurityProviderProps> = ({ children }) => {
  const { initialized, keycloak } = useKeycloak();

  useEffect(() => {
    window.accessToken = keycloak.token;
  }, [keycloak.token]);

  const isAuthenticated =
    !!keycloak.authenticated && keycloak?.idTokenParsed?.email.length;

  return (
    <SecurityContext.Provider
      value={{
        isInitialized: initialized,
        user: keycloak.idTokenParsed as User,
        hasClientRole: keycloak?.hasResourceRole,
        hasRealmRole: keycloak?.hasRealmRole,
        goToLogin: keycloak?.login,
        isAuthenticated,
        logout: keycloak?.logout,
      }}
    >
      {children}
    </SecurityContext.Provider>
  );
};

declare global {
  interface Window {
    accessToken?: string;
  }
}

export const useAuth = () => useContext(SecurityContext);
