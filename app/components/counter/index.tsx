import * as React from "react";
import useCount from "../../hooks/useCount";
interface Props {}

const Counter: React.FC<Props> = () => {
  const { count, increment, decrement, reset } = useCount(0, 5, 0);

  return (
    <div>
      <h1 data-testid="h1">{count}</h1>
      <button onClick={increment} data-testid="add">
        add
      </button>
      <button onClick={decrement} data-testid="dec">
        decq
      </button>
      <button onClick={reset} data-testid="reset">
        reset
      </button>
    </div>
  );
};
export default Counter;
