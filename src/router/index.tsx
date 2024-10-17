import { createBrowserRouter } from "react-router-dom";
import ProtectedLayout from "../components/layouts/protected";
import HomePage from "../pages/Home";
import { ROUTES } from "./paths";
import EbookPage from "../pages/Ebook";

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <ProtectedLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTES.ebook, element: <EbookPage /> },
    ],

  },
]);
