import { useEffect, useState } from "react";
import DashboardData from "../Components/DashboardData";
import DashboardStates from "../Components/DashboardStates";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { useData } from "../Context/ApiProvider";

export default function Dashboard() {
  const { hasData, setHasData } = useContext(DataContext);
  const { dataFile } = useData();
  const [data, setData] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(dataFile);
    }, [1000]);

    return () => clearTimeout(timer);
  }, [dataFile]);

  const totalNumberOfStudents = data
    ? data.reduce((total, entry) => total + entry.students, 0)
    : "--";

  const students = data ? data.map((entry) => entry.students) : [];
  console.log(students);

  const totalStudents = totalNumberOfStudents.toLocaleString();

  const newData = data ? data.slice(0, 9) : [];

  useEffect(() => {
    if (newData && newData.length > 0) {
      setHasData(true);
    } else {
      setHasData(false);
    }
  }, [newData, setHasData]);
  console.log(hasData);

  return (
    <div className="p-10 h-screen w-screen flex flex-col gap-6">
      <DashboardStates
        activeSubscriber={totalNumberOfStudents.toLocaleString()}
      />
      <div className="">
        <DashboardData
          hasData={hasData}
          data={newData}
          numberOfStudent={totalStudents}
          students="students"
          percentageOfStudent={totalNumberOfStudents.toLocaleString()}
        />
      </div>
    </div>
  );
}
