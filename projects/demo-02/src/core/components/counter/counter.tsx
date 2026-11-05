import { useState } from "react";
import "./counter.css";

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      type="button"
      className="counter"
      onClick={() => setCount((count) => count + 1)}
    >
      Count is {count}
    </button>
  );
};
