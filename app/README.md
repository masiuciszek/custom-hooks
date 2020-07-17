# Custom React hooks ⚛️λ🚀🍕

This is application is a code example of how you can build your own custom hooks with React and reuse them in your applications.
If there is any you like , just use them I am just glad they com ein handy! 😎😃🤗

### Tools dor this project 🛠🔧

- Next JS 💥
- Typescript ʦ
- Jest 🃏
- React-testing-library 🐙
- React-testing-library/hooks 🛠

<hr/>

### useToggle hook 🔛👮‍♀️

```tsx
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

<hr/>

### UseCount hook ⏱

```tsx
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

<hr/>

### UseMount hooks 🪓⚛️

```tsx
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

<hr/>

### useHoverHook 🐙

In this example we are using the use toggle hook to toggle our **boolean**.
So basically a hook withe help of another hook 💪🏻.

```tsx
import * as React from "react";
import useToggle from "./useToggle";

type ReturnHoveredHookType = [boolean, BindType];

export default (): ReturnHoveredHookType => {
  // const [isHovered, setIsHovered] = React.useState(false);
  const [isHovered, toggle] = useToggle();
  const bind = React.useMemo(() => {
    return {
      onMouseOver: () => toggle(),
      onMouseLeave: () => toggle(),
    };
  }, []);

  return [isHovered, bind];
};
```

<hr/>

### useContext hooks both for state and your reducer 🦄

This example can very, depending on how you prefer to structure your context API code.

```tsx
export const useSiteState = () => {
  const context = React.useContext(SiteStateContext);
  if (context === undefined) {
    throw new Error("useSiteState must be wrapped with in a provider");
  }
  return context;
};

export const useSiteDispatch = () => {
  const context = React.useContext(SiteDispatchContext);
  if (context === undefined) {
    throw new Error("useSiteDispatch must be wrapped with in a provider");
  }
  return context;
};
```

<br/>

### useCookie hook 🍪

```tsx
import * as React from "react";
import Cookies from "js-cookie";

type UseCookieReturnType = [
  string,
  React.Dispatch<React.SetStateAction<string>>
];

export const useCookie = ({ key }): UseCookieReturnType => {
  const initialCookie = Cookies.get(key);
  const [cookie, setStateCookie] = React.useState<string>(initialCookie);

  React.useEffect(() => {
    Cookies.set(key, cookie);
  }, [cookie, key]);

  return [cookie, setStateCookie];
};
```
