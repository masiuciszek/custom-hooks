import React from "react";
import usePrevious from "../../hooks/usePrevious";

const Counter2 = () => {
  const [count, setCount] = React.useState(0);

  const previousCount = usePrevious(count);

  return (
    <div>
      <h2>
        Now <span data-testid="count">{count}</span>
      </h2>
      <h2>
        {" "}
        before <span data-testid="prevCount">{previousCount}</span>
      </h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Sub</button>
    </div>
  );
};

export default Counter2;
