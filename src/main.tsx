import { createRoot } from "react-dom/client";
import Providers from "./providers/index.tsx";
import "./index.css";
import ProtectedApp from "./components/protected-app/index.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.tsx";

createRoot(document.getElementById("root")!).render(
  <Providers>
    <ProtectedApp>
      <RouterProvider router={router} />
    </ProtectedApp>
  </Providers>
);
