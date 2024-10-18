import { useAuth } from "../../providers/SecurityProvider";
import { Props } from "./types";

export const ProtectedRouter: React.FC<Props> = ({
  children,
  requiredClientRoles,
  unauthorizedMessage,
}) => {
  const { hasClientRole } = useAuth();

  if (
    requiredClientRoles &&
    !requiredClientRoles?.some((role) => hasClientRole(role))
  ) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <span>
          {unauthorizedMessage || "Você não tem acesso a este recurso"}
        </span>
      </div>
    );
  }

  return children;
};
