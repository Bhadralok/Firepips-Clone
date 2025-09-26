import DashboardData from "../Components/DashboardData";
import DashboardStates from "../Components/DashboardStates";
import StateButton from "../src/UI/StateButton";

export default function Dashboard() {
  return (
    <div className="p-10 h-screen w-screen flex flex-col gap-6">
      <DashboardStates />
      <div className="">
        <DashboardData />
      </div>
    </div>
  );
}
