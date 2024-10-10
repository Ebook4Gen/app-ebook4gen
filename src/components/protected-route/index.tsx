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
    return <h1>{unauthorizedMessage || "unauthorized"}</h1>;
  }

  return children;
};
