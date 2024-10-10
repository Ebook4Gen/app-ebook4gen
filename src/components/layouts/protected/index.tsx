import React from "react";
import { Outlet } from "react-router-dom";

const ProtectedLayout: React.FC = () => {
  return <Outlet />;
};

export default ProtectedLayout;
