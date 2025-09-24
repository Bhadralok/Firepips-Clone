import React, { useEffect, useRef, useState, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { UserProvider } from "../Context/UserContext";

import LoginLayout from "../Layouts/LoginLayout";
import Login from "../Pages/Login";
import "./index.css";
import RequestPage from "../Pages/RequestPage";
import Signup from "../Pages/Signup";
import NotFoundPage from "../Pages/NotFoundPage";
import RequestSent from "../Pages/RequestSent";
import Registration from "../Pages/Registration";
import NameSetup from "../Pages/NameSetup";
import Dashboard from "../Pages/Dashboard";
import DashboardLayout from "../Layouts/DashboardLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Login layout */}
      <Route path="/" element={<LoginLayout />}>
        <Route index element={<Login />} />
        <Route path="request" element={<RequestPage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="requestsent" element={<RequestSent />} />
        <Route path="registration" element={<Registration />} />
        <Route path="namesetup" element={<NameSetup />} />
      </Route>

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

function Main() {
  const [isMobile, setIsMobile] = useState(false);
  const alertedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkMobile = () => {
      const mobile = window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(mobile);

      if (mobile && !alertedRef.current) {
        alertedRef.current = true;
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="flex items-center justify-center h-screen text-center p-4">
        <p className="text-xl font-semibold">Please switch to your desktop</p>
      </div>
    );
  }

  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <StrictMode>
      <Main />
    </StrictMode>
  </UserProvider>
);
