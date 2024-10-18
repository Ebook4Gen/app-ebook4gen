import React from "react";
import { Outlet } from "react-router-dom";
import { ProtectedRouter } from "../../protected-route";
import { PERMISSIONS } from "../../../permissions";

const ProtectedLayout: React.FC = () => {
  return import.meta.env.VITE_KEYCLOAK_NODE_ENV === "stg" ? (
    <ProtectedRouter requiredClientRoles={[PERMISSIONS.ENVIROMENT]}>
      <Outlet />
    </ProtectedRouter>
  ) : (
    <Outlet />
  );
};

export default ProtectedLayout;
