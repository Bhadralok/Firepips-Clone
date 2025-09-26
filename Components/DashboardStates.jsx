import { FiArrowUpRight } from "react-icons/fi";
import CustomButton from "../src/UI/Custombutton";
import StateButton from "../src/UI/StateButton";

export default function DashboardStates({
  activeSubscriber = "--",
  stateParagraph = "Total student registered",
}) {
  return (
    <div className="flex justify-between w-full">
      <div className="flex gap-9 ">
        <StateButton isActive={true}>All students</StateButton>
        <StateButton isActive={false}>Active subscribers</StateButton>
        <StateButton isActive={false}>Courses uploaded</StateButton>
      </div>
      <div className="flex items-center justify-end w-[20%] text-right gap-7 h-fit">
        <div className="gap-9">
          <h2 className="font-extrabold">{activeSubscriber}</h2>
          <p className="">{stateParagraph}</p>
        </div>
        <div className="w-40">
          <CustomButton active={false} icon1={<FiArrowUpRight />}>More details</CustomButton>
        </div>
      </div>
    </div>
  );
}
