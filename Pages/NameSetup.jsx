import { useForm } from "react-hook-form";
import CustomButton from "../src/UI/Custombutton";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

export default function NameSetup() {
  const [isClicked, setIsClicked] = useState(false);
  const { setName } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 2000);

    setTimeout(() => {
      navigate("/dashboard");
    }, 2200);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("First Name:", data.firstName);
    setName(data.firstName);
  };

  // Watch the input value
  const firstNameValue = watch("firstName", "");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[35%] bg-white/60 gap-10 items-start backdrop-blur-md border border-white/50 p-10 shadow-2xl rounded-3xl flex flex-col"
    >
      <div>
        <h1 className="text-4xl text-primary-red leading-10 font-extrabold mb-3 mt-10">
          Firepipsfx <br />
          <span className="font-normal text-black">
            admin portal registration
          </span>
        </h1>
        <p className="text-secondary-black pb-8 font-medium ">
          What's your first name?
        </p>
      </div>

      <input
        type="text"
        placeholder="Enter first name"
        className={`border-b-2 bg-white outline-0 text-center h-15 w-full ${
          firstNameValue ? "border-primary-red" : "border-secondary-black"
        }`}
        {...register("firstName", {
          required: "First name is required",
          minLength: {
            value: 2,
            message: "First name must be at least 2 characters",
          },
        })}
      />
      {errors.firstName && (
        <p className="text-red-500 text-sm">{errors.firstName.message}</p>
      )}

      <CustomButton
        type="submit"
        active={isValid}
        onClick={handleClick}
        isLoading={isClicked}
        isLoadingText="Entering dashboard..."
      >
        Enter your dashboard
      </CustomButton>
    </form>
  );
}
