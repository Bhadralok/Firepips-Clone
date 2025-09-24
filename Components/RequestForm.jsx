import { useForm, Controller } from "react-hook-form";
import { Listbox } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import Custombutton from "../src/UI/Custombutton";
import Custominput from "../src/UI/Custominput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const roles = [
  { value: "", label: "Select" },
  { value: "educator", label: "Educator" },
  { value: "staff", label: "Staff" },
];

export default function RequestForm() {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: { email: "", role: "" },
  });
  const onSubmit = () => {
    navigate("/requestsent");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[35%] mb-13 bg-white/60 backdrop-blur-md border border-white/50 p-10 shadow-2xl rounded-3xl flex flex-col"
    >
      <div>
        <h1 className="text-4xl text-primary-red leading-10 font-extrabold mb-3 mt-10">
          Request Access
        </h1>
        <p className="leading-7 text-secondary-black pb-6 font-medium text-base">
          Enter your email and select your role to request access.
        </p>
      </div>

      <div className="flex flex-col pb-8 gap-6">
        <Custominput
          label="Email"
          name="email"
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

        {/* Role Field (Headless UI Listbox controlled with Controller) */}
        <div>
          <label className="block mb-2 font-medium">Role</label>
          <Controller
            control={control}
            name="role"
            rules={{
              validate: (v) => (v && v !== "" ? true : "Please select a role"),
            }}
            render={({ field: { value, onChange } }) => (
              <div className="w-full relative">
                <Listbox value={value} onChange={onChange}>
                  <div className="relative">
                    <Listbox.Button
                      className="w-full h-15 flex items-center justify-between rounded-lg border-2
                         rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl rounded-br-none
                         bg-white px-5 py-2 font-medium focus:outline-none focus:border-primary-red"
                    >
                      <span
                        className={`${value ? "text-black" : "text-gray-400"}`}
                      >
                        {roles.find((r) => r.value === value)?.label ||
                          "Select"}
                      </span>
                      <FaChevronDown className="ml-2 text-gray-500" />
                    </Listbox.Button>

                    <Listbox.Options className="absolute mt-1 w-full rounded-lg border bg-white shadow-lg z-10">
                      {roles.map((role) => (
                        <Listbox.Option
                          key={role.value}
                          value={role.value}
                          className={({ active, selected }) =>
                            `relative cursor-pointer px-5 py-2 flex items-center justify-between 
                             ${active ? "bg-primary-red text-white" : ""} 
                             ${selected && !active ? "bg-gray-100" : ""}`
                          }
                        >
                          {({ active, selected }) => (
                            <>
                              <span
                                className={`${
                                  active
                                    ? "text-white"
                                    : selected
                                    ? "text-primary-red"
                                    : "text-black"
                                }`}
                              >
                                {role.label}
                              </span>
                              {(selected || active) && (
                                <IoCheckmarkCircleSharp
                                  className={
                                    active
                                      ? "text-white text-lg"
                                      : "text-primary-red text-lg"
                                  }
                                />
                              )}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </div>
                </Listbox>
                {errors.role && (
                  <p className="text-sm text-red-600 mt-2">
                    {errors.role.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Submit (Request) button — only active when form is valid */}
        <Custombutton
          active={isValid}
          onClick={handleClick}
          isLoading={isLoading}
          type="submit"
        >
          Submit request
        </Custombutton>
      </div>
    </form>
  );
}
