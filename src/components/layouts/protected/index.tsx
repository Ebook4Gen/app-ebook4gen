import React from "react";
import { Outlet } from "react-router-dom";
import { ProtectedRouter } from "../../protected-route";
import { PERMISSIONS } from "../../../permissions";

const ProtectedLayout: React.FC = () => {
  return (
    <ProtectedRouter
      requiredClientRoles={
        import.meta.env.NODE_ENV === "dev" ? [PERMISSIONS.ENVIROMENT] : []
      }
    >
      <Outlet />
    </ProtectedRouter>
  );
};

export default ProtectedLayout;
