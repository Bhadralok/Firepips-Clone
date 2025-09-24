import { Outlet } from "react-router-dom";
import DashboardFooter from "../Components/DashboardFooter";
import DashboardHeader from "../Components/DashboardHeader";

export default function DashboardLayout() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <DashboardHeader />
      <div>
        <Outlet />
      </div>
      <DashboardFooter />
    </div>
  );
}
