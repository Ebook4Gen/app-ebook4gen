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
      <h1>{unauthorizedMessage || "Você não tem acesso a este recurso"}</h1>
    );
  }

  return children;
};
