import { useEffect, useRef, useState } from "react";
import Login from "../Pages/Login.jsx";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);
  const alertedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkMobile = () => {
      const mobile = window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(mobile);

      if (mobile && !alertedRef.current) {
        alert("Uhhhh! you can only view this on a PC though... sorry 🐰");
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
        <p className="text-xl font-semibold">
          Uhhhh! You can only view this on a PC though... sorry 🐰
        </p>
      </div>
    );
  }
}
