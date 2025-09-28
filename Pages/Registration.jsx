import { useState } from "react";
import { useForm } from "react-hook-form";
import CustomButton from "../src/UI/Custombutton";
import Custominput from "../src/UI/Custominput";
import line from "../src/assets/line.svg";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 2000);
    setTimeout(() => {
      navigate("/namesetup");
    }, 2200);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange", // validate while typing
  });

  return (
    <form
      onSubmit={handleSubmit()}
      className="w-[35%] mb-13 bg-white/60 backdrop-blur-md border border-white/50 p-10 shadow-2xl rounded-3xl flex flex-col"
    >
      <h1 className="text-4xl text-primary-red leading-10 font-extrabold mb-3 mt-10">
        Firepipsfx <br />
        <span className="font-normal text-black">
          admin portal registration
        </span>
      </h1>
      <p className="text-secondary-black pb-8 font-medium text-base">
        You have been invited by Bhadralok to gain access to this portal as an
        educator. To accept this invite, please create an account below to
        continue...
      </p>

      <div className="flex flex-col gap-5 pb-8">
        {/* Email */}
        <Custominput
          label="Email"
          name="email"
          isInvisible={false}
          placeholder="Enter your email"
          type="email"
          register={register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
          error={errors.email}
        />
        <img src={line} alt="" />
      </div>

      <div className="flex flex-col pb-8 gap-6">
        {/* Password */}
        <Custominput
          label="Set a password"
          name="password"
          type="password"
          placeholder="Enter a password"
          register={register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          error={errors.password}
        />

        {/* Confirm Password */}
        <Custominput
          label="Confirm password"
          name="confirmPassword"
          type="password"
          placeholder="Re-enter your password"
          register={register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value, formValues) =>
              value === formValues.password || "Passwords do not match",
          })}
          error={errors.confirmPassword}
        />
      </div>

      {/* Button */}
      <CustomButton
        type="submit"
        active={isValid}
        onClick={handleClick}
        isLoading={isClicked}
      >
        Register account
      </CustomButton>
    </form>
  );
}
