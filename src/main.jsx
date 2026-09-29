import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routers/Routes";
import { Toaster } from "react-hot-toast";
import { position, toastOptions } from "./utils/Datas";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster position={position} toastOptions={toastOptions} />
    <RouterProvider router={router} />
  </StrictMode>,
);
