import { createBrowserRouter } from "react-router-dom";
import ProtectedLayout from "../components/layouts/protected";
import HomePage from "../pages/Home";
import { ROUTES } from "./paths";

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <ProtectedLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);
