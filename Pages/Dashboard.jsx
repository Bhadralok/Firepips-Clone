import { useEffect, useState } from "react";
import DashboardData from "../Components/DashboardData";
import DashboardStates from "../Components/DashboardStates";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

export default function Dashboard() {
  const { hasData, setHasData } = useContext(DataContext);
  const [data, setData] = useState();


  useEffect(() => {
    const timer = setTimeout(() => {
      setData(
        [
          { month: "January", students: 120 },
          { month: "February", students: 150 },
          { month: "March", students: 170 },
          { month: "April", students: 140 },
          { month: "May", students: 200 },
          { month: "June", students: 180 },
          { month: "July", students: 220 },
          { month: "August", students: 210 },
          { month: "September", students: 190 },
          { month: "October", students: 230 },
          { month: "November", students: 250 },
          { month: "December", students: 400 },
        ])
    }, 3000);
    return () => clearTimeout(timer);
  }, [])
     
  // const data = null;

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
      <DashboardStates activeSubscriber={totalNumberOfStudents.toLocaleString()}  />
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
