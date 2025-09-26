import { AiFillInfoCircle, AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import Line from "../src/assets/blackLine.svg";
import Loader from "../src/assets/redLoader.svg";

export default function DashboardData({ percentageOfStudent = "--", numberOfStudent = "--" }) {
  return (
    <div className="w-full p-10 h-full space-y-10 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-primary-black text-4xl font-black">{numberOfStudent}</h2>
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
        <img src={Line} alt="" className="w-full" />
      </div>
      <div className="">
        <div className="flex flex-col items-center gap-4">
          <img src={Loader} alt="Loading-icon" className="Loader" />
          <p className="font-bold">Loading sensitive data, please wait</p>
        </div>
      </div>
    </div>
  );
}
