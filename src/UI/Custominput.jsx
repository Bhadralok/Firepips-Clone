export default function Custominput({
  label,
  placeholder,
  type = "text",
  name,
  register,
  error,
  isClicked
}) {
  return (

    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-bold">
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register} // 👈 spread the register function
        className="border-2 border-black bg-white w-full h-15 px-5 rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl font-bold placeholder:text-placeholder-gray"
      // {type === password && <FaRegEye /> }
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
}
