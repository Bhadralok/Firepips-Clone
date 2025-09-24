import { useState } from "react";
import { FaPen } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { IoEye, IoEyeOff } from "react-icons/io5";

export default function CustomInput({
  label,
  placeholder,
  type = "text",
  name,
  isInvisible = true,
  isInvisibleLabel = "YOUR EMAIL",
  register,
  error,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={name} className="font-bold">
        {label}
      </label>
      <div className="relative w-full">
        {isInvisible ? (
          <input
            id={name}
            type={inputType}
            placeholder={placeholder}
            {...register}
            className="border-2 border-black bg-white w-full h-15 px-5 rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl font-bold placeholder:text-placeholder-gray"
          />
        ) : (
          <div className="flex flex-col gap-2">
            <div>
              <label htmlFor="" className="font-extrabold">
                {isInvisibleLabel}
              </label>
            </div>
            <div className="flex justify-between items-center">
              <input
                type="text"
                className={
                  isDisabled
                    ? `bg-white/10 border-none focus:border-none outline-none w-full`
                    : `border-b-2 border-primary-red w-full h-9 outline-none`
                }
                disabled={isDisabled}
                placeholder={placeholder}
                {...register}
                onBlur={() => setIsDisabled(!isDisabled)}
              />
              <span>
                {isDisabled ? (
                  <FaPen onClick={() => setIsDisabled(!isDisabled)} />
                ) : (
                  <FaCircleCheck onClick={() => setIsDisabled(!isDisabled)} />
                )}
              </span>
            </div>
          </div>
        )}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-600"
          >
            {showPassword ? <IoEyeOff /> : <IoEye />}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
}
