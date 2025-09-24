import Custombutton from "../src/UI/Custombutton";
import Custominput from "../src/UI/Custominput";
import line from "../src/assets/line.svg";
import { FaArrowRight } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function LoginForm() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 2000);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange", // validates on change instead of only submit
  });

  const onSubmit = (data) => {
    // Something goes here on onSubmit
    console.log("Form submitted:", data);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[35%] mb-13 bg-white/60 backdrop-blur-md border border-white/50 p-10 shadow-2xl rounded-3xl flex flex-col"
      >
        <div>
          <h1 className="text-4xl text-primary-red leading-10 font-extrabold mb-3 mt-10">
            Firepipsfx <br />
            <span className="font-normal text-black">admin portal</span>
          </h1>
          <p className="leading-10 text-secondary-black pb-8 font-medium">
            Login to your admin dashboard
          </p>
        </div>

        <div className="flex flex-col pb-8 gap-8">
          {/* Email Field */}
          <Custominput
            label="Email"
            name="email"
            placeholder="Enter your email to continue"
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

          {/* Password Field */}
          <Custominput
            label="Password"
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

          {/* Login button */}
          <Custombutton
            active={isValid}
            type="submit"
            onClick={handleClick}
            isLoading={isClicked}
          >
            Login to admin portal
          </Custombutton>

          <img src={line} alt="" />
        </div>

        <div className="w-56 flex flex-col gap-5">
          <p className="text-base font-bold">Forgot your password?</p>
          <Custombutton
            icon={<FaArrowRight />}
            type="button"
            variant="outlined"
          >
            Reset your password
          </Custombutton>
        </div>
      </form>
    </div>
  );
}
