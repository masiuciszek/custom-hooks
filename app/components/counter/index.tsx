import * as React from "react";
import useCount from "../../hooks/useCount";
interface Props {}

const Counter: React.FC<Props> = () => {
  const { count, increment, decrement, reset } = useCount(0, 5, 0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>add</button>
      <button onClick={decrement}>dec</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};
export default Counter;
