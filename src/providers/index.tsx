import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./SecurityProvider";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  children: React.ReactElement;
};

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <>
      <ToastContainer />
      <AuthProvider
        clientId={import.meta.env.VITE_KEYCLOAK_CLIENT_ID as string}
        realm={import.meta.env.VITE_KEYCLOAK_REALM_ID as string}
        url={import.meta.env.VITE_KEYCLOAK_URL as string}
      >
        {children}
      </AuthProvider>
    </>
  );
};

export default Providers;
