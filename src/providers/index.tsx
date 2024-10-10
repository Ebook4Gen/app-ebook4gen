import { AuthProvider } from "./SecurityProvider";

type Props = {
  children: React.ReactElement;
};

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <AuthProvider
      clientId={import.meta.env.VITE_KEYCLOAK_CLIENT_ID as string}
      realm={import.meta.env.VITE_KEYCLOAK_REALM_ID as string}
      url={import.meta.env.VITE_KEYCLOAK_URL as string}
    >
      {children}
    </AuthProvider>
  );
};

export default Providers;
