import { useContext } from "react";
import DashboardStates from "../Components/DashboardStates";
import States from "../Components/States";
import { useData } from "../Context/ApiProvider";
import { DataContext } from "../Context/DataContext";
import DashboardData from "../Components/DashboardData";

export default function ActiveSubscribers() {
  const { dataFile } = useData();
  const { hasData } = useContext(DataContext);
  const data = dataFile.slice(0, 9);
  const totalNumberOfStudents = data
    ? data.reduce((total, entry) => total + entry.students, 0)
    : "--";
  return (
    <div className="p-10 h-screen w-screen flex flex-col gap-6">
      <DashboardStates />
      <div>
        <DashboardData
          data={data}
          hasData={hasData}
          numberOfStudent={totalNumberOfStudents.toLocaleString()}
          percentageOfStudent={totalNumberOfStudents.toLocaleString()}
          students="students"
        />
      </div>
    </div>
  );
}
