import { createBrowserRouter } from "react-router-dom";
import ProtectedLayout from "../components/layouts/protected";
import { ROUTES } from "./paths";
import EbookPage from "../pages/Ebook";

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <ProtectedLayout />,
    children: [
      { index: true, element: <EbookPage /> },
      { path: ROUTES.ebook, element: <EbookPage /> },
    ],
  },
]);
