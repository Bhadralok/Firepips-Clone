import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import logo from "../src/assets/logo-dark.png";
import navigation from "../src/assets/navigation.svg";
import { UserContext } from "../Context/UserContext";
import redline from "../src/assets/redline.svg";
import userlogo from "../src/assets/Profile.svg";
import Dropdown from "../Components/Dropdown";
import DropdownLine from "../src/assets/DropdownLine.svg";
import LogoutButton from "../src/assets/Logoutbutton.svg";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DashboardHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenArrow, setIsOpenArrow] = useState(false);

  const { name } = useContext(UserContext);
  const handleToggleArrow = () => {
    setIsOpenArrow(!isOpenArrow);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  const menuItems = [
    { label: "Dashboard" },
    { label: "Students" },
    { label: "Learning" },
    { label: "Subscriptions" },
    { label: "Content" },
    { label: "Meetings" },
    { label: "One-on-one" },
    { label: "Revenue" },
    {
      label: <img src={DropdownLine} alt="line" />,
      className: "pointer-events-none",
    },
    {
      label: "Logout",
      icon: LogoutButton,
      onClick: () => console.log("Logging out..."),
    },
  ];
  const profileItems = [
    { label: "Change Profile Picture" },
    { label: "Your profile" },
  ];

  return (
    <>
      <div className="p-10 flex shadow-xl justify-between">
        <div>
          <img src={logo} alt="Logo" onClick={handleClick} />
        </div>
        <div className="flex items-center gap-3">
          <img src={navigation} alt="" />
          <div className="flex items-center gap-2 justify-center">
            <p className="font-bold text-lg" onClick={handleToggle}>
              Dashboard
            </p>
            <span>
              {isOpen ? (
                <FaChevronUp onClick={handleToggle} />
              ) : (
                <FaChevronDown onClick={handleToggle} />
              )}
              <Dropdown
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                items={menuItems}
                style="mt-3 py-4 px-4"
              />{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <header className="px-10 pt-10 pb-5 flex items-center justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-extrabold">Hi {name}!</h1>
            <p>Check out Firepipsfx’s amazing performance...</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={userlogo} alt="" />
            {isOpenArrow ? (
              <FaChevronUp onClick={handleToggleArrow} />
            ) : (
              <FaChevronDown onClick={handleToggleArrow} />
            )}
            <Dropdown
              isOpen={isOpenArrow}
              onClose={() => setIsOpenArrow(false)}
              items={profileItems}
              style="mt-45 py-4 px-3"
            />{" "}
          </div>
        </header>
        <div className="px-10 w-screen">
          <img src={redline} alt="" className="w-full" />
        </div>
      </div>
    </>
  );
}
