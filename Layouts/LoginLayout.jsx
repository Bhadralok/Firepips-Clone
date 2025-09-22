import LoginHeader from "../Components/LoginHeader";
import Background from "../src/UI/Background";
import { Outlet } from "react-router-dom";

export default function Login() {
  const year = new Date().getFullYear();

  return (
    <>
      <LoginHeader navigateTo="" />
      <div className="flex flex-col h-[85vh]">
        <div className="flex-grow flex items-center justify-center overflow-hidden relative">
          <Outlet />
        </div>
          <Background />

        <div className="py-10 w-full flex items-center justify-center">
          <p className="text-secondary-black font-medium">
            &copy; {year} Firepips Company Limited. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}
