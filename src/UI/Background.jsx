import Flow from "../assets/Flow.jsx";
export default function Background() {
  return (
    <div className="fixed bottom-0 -z-30 w-screen">
      <div className="overflow-hidden">
        <Flow />
      </div>
    </div>
  );
}
