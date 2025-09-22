import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Custombutton from "../src/UI/Custombutton";
import logo from "../src/assets/logo-dark.png";
import { useLocation, useNavigate } from "react-router-dom";

export default function LoginHeader() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  let buttonText = "Request access";
  let icon1 = null;
  let icon2 = null;
  let navigateTo = null;
  if (pathname === "/") {
    buttonText = "Request access";
    icon1 = <FaArrowRight />;
    navigateTo = "/request";
  } else if (pathname === "/request") {
    buttonText = "Back to login";
    icon2 = <FaArrowLeft />;
    navigateTo = "/";
  } else if (pathname === "/signup") {
    navigateTo = "";
  }

  return (
    <div className="p-10 overflow-hidden flex items-center justify-between">
      <div>
        <img src={logo} alt="" className="cursor-pointer" onClick={() => navigate("/")} />
      </div>
      {navigateTo && (
        <div className="w-50">
          <Custombutton
            icon1={icon1}
            icon2={icon2}
            onClick={() => navigate(navigateTo)}
            variant="outlined"
          >
            {buttonText}
          </Custombutton>
        </div>
      )}
    </div>
  );
}
