import { useAuth } from "../../providers/SecurityProvider";
import { Props } from "./types";

const ProtectedApp: React.FC<Props> = ({ children }) => {
  const { isAuthenticated, goToLogin, isInitialized } = useAuth();

  if (!isInitialized) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <span>Carregando</span>;
      </div>
    );
  }

  if (!isAuthenticated) {
    goToLogin();
    return <></>;
  }

  return children;
};

export default ProtectedApp;
