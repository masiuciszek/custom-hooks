# Custom React hooks ⚛️λ🚀🍕

This is application is a code example of how you can build your own custom hooks with React and reuse them in your applications.
If there is any you like , just use them I am just glad they com ein handy! 😎😃🤗

### Tools dor this project 🛠🔧

* Next JS 💥
* Typescript ʦ
* Jest 🃏
* React-testing-library 🐙

### useToggle hook 🔛👮‍♀️

``` tsx

  import * as React from "react";

type ToggleReturnType = [boolean, () => void];

export default (initialState = false): ToggleReturnType => {
  const [state, setState] = React.useState<boolean>(initialState);

  const toggle = (): void => {
    setState((prevState) => !prevState);
  };

  return [state, toggle];
};

```

### UseCount hook ⏱

``` tsx
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

```

### UseMount hooks 🪓⚛️

``` tsx
  import { useEffect } from "react";

type FnTypeHook = Fn | AnotherFN | SecondFn | ThirdFN;

export const useMount = (fn: FnTypeHook): void => {
  useEffect(() => {
    fn();
  }, []);
};
export const useUnmount = (fn: FnTypeHook): void => {
  useEffect(() => {
    return () => {
      fn();
    };
  });
};

```
