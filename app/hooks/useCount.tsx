import * as React from "react";

type CountReturnType = {
  count: number;
  increment: Fn;
  decrement: Fn;
  reset: Fn;
};

export default (
  initialState = 0,
  maxValue = 100,
  minValue = 0
): CountReturnType => {
  const [count, setCount] = React.useState<number>(initialState);

  const increment = (): void => {
    setCount((prevState) =>
      prevState >= maxValue ? prevState : prevState + 1
    );
  };
  const decrement = (): void => {
    setCount((prevState) => (prevState > minValue ? prevState - 1 : prevState));
  };
  const reset = (): void => {
    setCount(0);
  };

  return { count, increment, decrement, reset };
};
