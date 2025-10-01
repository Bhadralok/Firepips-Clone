export default function StateButton({ isActive, children, onClick }) {
  const baseStyle =
    "font-bold h-12 px-5 flex items-center justify-center border-b-2";
  const activeStyle = "text-primary-red border-primary-red";
  const inactiveStyle = "text-secondary-black border-transparent";

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${isActive ? activeStyle : inactiveStyle}`}
    >
      {children}
    </button>
  );
}
