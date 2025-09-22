import { useNavigate } from "react-router-dom";
import CustomButton from "../src/UI/Custombutton";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen gap-5 items-center justify-center flex-col">
      <h1 className=" text-9xl font-bold">404</h1>
      <h2>Looks like the page you're looking for doesn't exist</h2>
      <div className="flex gap-5 w-[20%]">
        <CustomButton onClick={() => navigate(-1)}>Go back</CustomButton>
        <CustomButton onClick={() => navigate("/")}>Go Home</CustomButton>
      </div>
    </div>
  );
}
