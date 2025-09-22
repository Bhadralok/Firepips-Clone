import Loader from "../assets/Loading-icon.svg";
export default function CustomButton({
  icon1,
  icon2,
  children,
  active = true,
  type = "button",
  variant = "login",
  isLoading,
  isLoadingText = "Logging in...",
  onClick,
  ...props
}) {
  const styleChange = () => {
    if (isLoading) {
      return "bg-placeholder-gray text-white cursor-not-allowed";
    } else {
      return " bg-primary-red cursor-pointer text-white hover:bg-primary-red hover:text-white";
    }
  };
  const styles = {
    login: styleChange(),
    secondary: "bg-secondary-red text-primary-red cursor-pointer",
    outlined:
      "border-2 border-primary-red cursor-pointer text-primary-red hover:bg-primary-red hover:text-white",
  };

  const baseClasses =
    "flex items-center justify-center gap-2 py-4 w-full rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl font-bold transition-colors duration-300";

  const activeClasses = styles[variant] || styles.login;
  const inactiveClasses = "bg-placeholder-gray text-white cursor-not-allowed";

  return (
    <button
      type={type}
      className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`}
      disabled={!active}
      {...props}
      onClick={onClick}
    >
      {isLoading && <img src={Loader} className="Loader" alt="Loading" />}
      {icon2 && <span>{icon2}</span>}
      {isLoading ? `${isLoadingText}` : children}
      {icon1 && <span>{icon1}</span>}
    </button>
  );
}
