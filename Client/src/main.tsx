import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RouterProvider from "./router/RouterProvider";
import ThemeProvider from "./theme/ThemeProvider";
import { AuthProvider } from "./Context/AuthContext";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <Toaster position="top-center" />
        <RouterProvider />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
