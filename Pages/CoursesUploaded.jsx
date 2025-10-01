import { useContext } from "react";
import DashboardData from "../Components/DashboardData";
import States from "../Components/States";
import { useData } from "../Context/ApiProvider";
import { DataContext } from "../Context/DataContext";
import DashboardStates from "../Components/DashboardStates";

export default function CoursesUploaded() {
  const { dataFile } = useData();
  const { hasData } = useContext(DataContext);
  const data = dataFile.slice(0, 9);
  const totalNumberOfStudents = data
    ? data.reduce((total, entry) => total + entry.students, 0)
    : "--";
  return (
    <div className="p-10 h-screen w-screen flex flex-col gap-6">
      <DashboardStates
        activeSubscriber={totalNumberOfStudents.toLocaleString()}
      />
      {/* <States /> */}
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
