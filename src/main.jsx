import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import LoginLayout from "../Layouts/LoginLayout";
import Login from "../Pages/Login";
import "./index.css";
import RequestPage from "../Pages/RequestPage";
import Signup from "../Pages/Signup";
import NotFoundPage from "../Pages/NotFoundPage";
import RequestSent from "../Pages/RequestSent";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Login layout */}
      <Route path="/" element={<LoginLayout />}>
        <Route index element={<Login />} />
        <Route path="request" element={<RequestPage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="requestsent" element={<RequestSent />} />
      </Route>

      {/* Dashboard page (no login layout) */}
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}

      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
