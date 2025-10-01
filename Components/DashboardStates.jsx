import { FiArrowUpRight } from "react-icons/fi";
import CustomButton from "../src/UI/Custombutton";
import StateButton from "../src/UI/StateButton";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import StateComponent from "./States";

export default function DashboardStates({
  activeSubscriber = "--",
  stateParagraph = "Total student registered",
}) {
  const { hasData } = useContext(DataContext);


  return (
    <div className="flex justify-between w-full">
      <StateComponent />
      <div className="flex items-center justify-end w-[20%] text-right gap-7 h-fit">
        <div className="gap-9">
          <h2 className="font-extrabold">{activeSubscriber}</h2>
          <p className="">{stateParagraph}</p>
        </div>
        <div className="w-40">
          <CustomButton active={hasData} icon1={<FiArrowUpRight />}>
            More details
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
