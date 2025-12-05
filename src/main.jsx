import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={PublicRoute}></RouterProvider>
  </StrictMode>
);
