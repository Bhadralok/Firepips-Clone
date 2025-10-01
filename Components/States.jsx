import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StateButton from "../src/UI/StateButton";

export default function States() {
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const currentPath = window.location.pathname;

  useEffect(() => {
    if (currentPath === "/dashboard") {
      setActive1(true);
      setActive2(false);
      setActive3(false);
    } else if (currentPath === "/dashboard/subscribers") {
      setActive1(false);
      setActive2(true);
      setActive3(false);
    } else if (currentPath === "/dashboard/courses") {
      setActive1(false);
      setActive2(false);
      setActive3(true);
    }
  }, [currentPath]);

  const navigate = useNavigate();
  return (
    <div>
      <div className="flex gap-9 ">
        <StateButton isActive={active1} onClick={() => navigate("/dashboard")}>
          All students
        </StateButton>
        <StateButton
          isActive={active2}
          onClick={() => navigate("/dashboard/subscribers")}
        >
          Active subscribers
        </StateButton>
        <StateButton
          isActive={active3}
          onClick={() => navigate("/dashboard/courses")}
        >
          Courses uploaded
        </StateButton>
      </div>
    </div>
  );
}
