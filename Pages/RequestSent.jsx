import { FaCircleCheck } from "react-icons/fa6";
import CustomButton from "../src/UI/Custombutton";
import { IoMdArrowUp } from "react-icons/io";
import { FaArrowLeft, FaArrowUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function RequestSent() {
  const navigate = useNavigate();

  return (
    <div className="w-[35%] bg-white/60 items-center backdrop-blur-md border border-white/50 p-10 shadow-2xl rounded-3xl flex flex-col">
      <FaCircleCheck size={90} color="#ED3C52" />
      <div className="flex flex-col font-medium items-center">
        <h1 className="text-[2.5rem]">Request sent!</h1>
        <p className="text-secondary-black font-medium ">
          You will be sent an email invitation when your request has been
          accepted
        </p>
      </div>
      <div className="flex gap-5 mt-8 w-full px-9">
        <CustomButton onClick={() => navigate("/")} icon2={<FaArrowLeft />}>
          Go back to login
        </CustomButton>
        <CustomButton
          variant="secondary"
          icon1={<FaArrowUp className="rotate-45" />}
          onClick={() => window.open("https://firepipsfx.com", "_blank")}
        >
          Go to official website
        </CustomButton>
      </div>
    </div>
  );
}
