import {
  AiFillInfoCircle,
  AiOutlineCaretDown,
  AiOutlineCaretUp,
} from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import blackLine from "../src/assets/blackLine.svg";
import Loader from "../src/assets/redLoader.svg";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Cell,
} from "recharts";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { useData } from "../Context/ApiProvider";

export default function DashboardData({
  percentageOfStudent = "--",
  numberOfStudent = "--",
  hasData = false,
  data = null,
  students,
}) {
  const [isDropdown, setIsDropdown] = useState(false);
  const [timeDisplay, setTimeDisplay] = useState("This year");
  const { setDataFile } = useData();
  const handleToggle = () => {
    setIsDropdown(!isDropdown);
  };

  const menu = [
    { label: "This week" },
    { label: "This month" },
    { label: "Last 6 months" },
    { label: "This year" },
    { label: "Last 6 years" },
  ];

  const handleClose = (item) => {
    setIsDropdown(false);
    setTimeDisplay(item.label);
    if (item.label === "This month") {
      setDataFile([
        { month: "SEP 1 - 7", students: 160 },
        { month: "SEP 8 - 14", students: 200 },
        { month: "SEP 15 - 21", students: 145 },
        { month: "SEP 22 - 28", students: 220 },
        { month: "SEP 29 - 30", students: 130 },
      ]);
    } else if (item.label === "This year") {
      setDataFile([
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
      ]);
    } else if (item.label === "Last 6 months") {
      setDataFile([
        { month: "April", students: 140 },
        { month: "May", students: 200 },
        { month: "June", students: 180 },
        { month: "July", students: 220 },
        { month: "August", students: 210 },
        { month: "September", students: 190 },
      ]);
    } else if (item.label === "Last 6 years") {
      setDataFile([
        { month: "2020", students: 1200 },
        { month: "2021", students: 1500 },
        { month: "2022", students: 1700 },
        { month: "2023", students: 1400 },
        { month: "2024", students: 2000 },
        { month: "2025", students: 1800 },
      ]);
    } else if (item.label === "This week") {
      setDataFile([
        { month: "Mon", students: 160 },
        { month: "Tue", students: 200 },
        { month: "Wed", students: 145 },
        { month: "Thu", students: 220 },
        { month: "Fri", students: 130 },
        { month: "Sat", students: 180 },
        { month: "Sun", students: 90 },
      ]);
    }
  };

  return (
    <div className="w-full p-10 h-full space-y-10 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-primary-black text-4xl font-black">
            {numberOfStudent}
          </h2>
          <div className="flex relative items-center gap-2">
            <AiOutlineCaretDown color="red" />{" "}
            <p
              onClick={handleToggle}
              className="font-medium text-secondary-black flex items-center justify-center gap-1"
            >
              {percentageOfStudent} | {timeDisplay}
              <span>
                <FaChevronDown />
              </span>
            </p>
            <Dropdown
              items={menu}
              isOpen={isDropdown}
              position="left-2 top-10 py-8 z-10 px-5 gap-4"
              icon={
                <IoCheckmarkCircleSharp
                  className="text-primary-red"
                  size={14}
                />
              }
              onClose={handleClose}
            />
          </div>
        </div>
        <div className="flex flex-col items-end gap-4">
          <AiFillInfoCircle size={24} />
          <p className="uppercase text-xs text-secondary-black font-medium tracking-widest">
            Hover on each bar to see details
          </p>
        </div>
      </div>
      <div className="w-full">
        <img src={blackLine} alt="" className="w-full" />
      </div>
      <div className="">
        {hasData ? (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
            >
              <Bar
                dataKey={students}
                barSize={60}
                axisLine={false}
                radius={[5, 5, 0, 5]}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index % 2 === 0 ? "#ED3C52" : "#1E0306"}
                  />
                ))}
              </Bar>
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tickMargin={20}
                tickFormatter={(month) => month.toUpperCase()}
              />
              <CartesianGrid horizontal={false} vertical={false} />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <img src={Loader} alt="Loading-icon" className="Loader" />
            <p className="font-bold">Loading sensitive data, please wait</p>
          </div>
        )}
      </div>
    </div>
  );
}
