import { useState, useEffect } from "react";

export default function Counter({ targetNumber, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = targetNumber / (duration / 50); // how much to add each step
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        clearInterval(timer);
        setCount(targetNumber);
      } else {
        setCount(Math.floor(start));
      }
    }, 50); // update every 50ms

    return () => clearInterval(timer);
  }, [targetNumber, duration]);

  return (
    <span className="font-bold text-2xl">
      {count.toLocaleString()} {/* adds commas */}
    </span>
  );
}
