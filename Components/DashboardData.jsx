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

export default function DashboardData({
  percentageOfStudent = "--",
  numberOfStudent = "--",
  hasData = false,
  data = null,
  students,
}) {
  return (
    <div className="w-full p-10 h-full space-y-10 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-primary-black text-4xl font-black">
            {numberOfStudent}
          </h2>
          <div className="flex items-center gap-2">
            <AiOutlineCaretDown color="red" />{" "}
            <p className="font-medium text-secondary-black flex items-center justify-center gap-1">
              {percentageOfStudent} | This year{" "}
              <span>
                <FaChevronDown />
              </span>
            </p>
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
                tickFormatter={(month) => month.substring(0, 3).toUpperCase()}
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
