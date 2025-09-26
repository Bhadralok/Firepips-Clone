export default function StateButton({ isActive, children }) {
  const style = "font-bold h-12 px-5 flex items-center justify-center ";
  return (
    <>
      {isActive ? (
        <div
          className={`${style} text-primary-red border-b-2 border-primary-red`}
        >
          <button>{children}</button>
        </div>
      ) : (
        <div className={`${style}text-secondary-black`}>
          <button>{children}</button>
        </div>
      )}
    </>
  );
}
