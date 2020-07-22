# Custom React hooks ⚛️λ🚀🍕

This is application is a code example of how you can build your own custom hooks with React and reuse them in your applications.
If there is any you like , just use them I am just glad they com ein handy! 😎😃🤗

## Big Thanks to Scott Tolinski from Level Up Tutorials and Egghead.io for all knowledge

### Tools dor this project 🛠🔧

* Next JS 💥
* Typescript ʦ
* Jest 🃏
* React-testing-library 🐙
* React-testing-library/hooks 🛠

<hr/>

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

<hr/>

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

<hr/>

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

<hr/>

### useHoverHook 🐙

In this example we are using the use toggle hook to toggle our **boolean**.
So basically a hook withe help of another hook 💪🏻.

``` tsx
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

``` tsx
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

``` tsx
import * as React from "react";
import Cookies from "js-cookie";

type UseCookieReturnType = [
  string,
  React.Dispatch<React.SetStateAction<string>>
];

interface Key {
  key: string;
}

export const useCookie = ({ key }: Key): UseCookieReturnType => {
  const initialCookie = Cookies.get(key);
  const [cookie, setStateCookie] = React.useState<string>(initialCookie);

  React.useEffect(() => {
    Cookies.set(key, cookie);
  }, [cookie, key]);

  return [cookie, setStateCookie];
};
```

### useScrollFreeze hook 🥶

useful when you want to prevent the user from scrolling the page, foe example when a modal is switched to true (open).

``` tsx
import * as React from "react";

export default () => {
  React.useLayoutEffect(() => {
    const original = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    // Cleanup
    // runs when component ore the hook is unmounted
    return () => {
      document.body.style.overflow = original;
    };
  }, []);
};
```

<br/>

### useWindowWidth 🔥

``` tsx
import * as React from "react";

const useWindowWidth = (): number => {
  const [width, setWidth] = React.useState<number>(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    // Cleanup Remove our event listener (unmunting)
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return width;
};

export default useWindowWidth;
```

<br />

### useMeasure hook 🤗🐶

Here I using a polyfill , what I actually recommend.
ResizeObserver is still not fully supported in all browsers

This hook is great for measure all different kind of a specific element.

``` tsx
import * as React from "react";
import ResizeObserver from "resize-observer-polyfill";

interface Bound {
  left: number;
  top: number;
  width: number;
  height: number;
}

const useMeasure = () => {
  const ref = React.useRef();

  const [bounds, setBounds] = React.useState<Bound>({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  const [resizeX] = React.useState(() => {
    return new ResizeObserver(([entry]) => setBounds(entry.contentRect));
  });

  React.useEffect(() => {
    if (ref.current) {
      resizeX.observe(ref.current);
    }
    return () => {
      return resizeX.disconnect();
    };
  }, [resizeX]);

  return [{ ref }, bounds];
};

export default useMeasure;
```

<br/>

### useScript hook 𝒮👩🏻‍💻

This hook i useful for when you want need to load a script into your project, for example a recaptcha from google's API

``` tsx
import * as React from "react";

interface Status {
  loaded: boolean;
  error: boolean;
}

type UseScriptReturn = [boolean, boolean];

const useScript = (src: string): UseScriptReturn => {
  const cached = [];

  const [status, setStatus] = React.useState<Status>({
    loaded: false,
    error: false,
  });

  React.useEffect(() => {
    // if script already exits then ....
    if (cached.includes(src)) {
      setStatus({
        loaded: true,
        error: false,
      });
    } else {
      cached.push(src);

      const script = document.createElement("script");
      script.src = src;
      // for not blocking
      script.async = true;

      const onLoad = () => {
        setStatus({
          loaded: true,
          error: false,
        });
      };

      const onError = () => {
        const srcIndex = cached.indexOf(src);
        if (srcIndex >= 0) {
          cached.splice(srcIndex, 1);
        }

        // destroy
        script.remove();
        setStatus({
          loaded: true,
          error: true,
        });
      };
      script.addEventListener("load", onLoad);
      script.addEventListener("error", onError);

      document.body.appendChild(script);
      return () => {
        script.removeEventListener("load", onLoad);
        script.removeEventListener("error", onError);
      };
    }
  }, [src]);

  return [status.loaded, status.error];
};

export default useScript;
```

<br/>

### useKeyEvent hook ⚓️

This hook really is a very handy hook when you working with keyboard inputs , really helped me a lot when i built a hangman game with react.

``` tsx
import * as React from "react";

const useKeyEvent = () => {
  const [letter, setLetter] = React.useState<string>("");

  const handleKeyEvent = (event: KeyboardEvent) => {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      setLetter(event.key);
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyEvent);

    return () => {
      window.removeEventListener("keydown", handleKeyEvent);
    };
  });

  return letter;
};

export default useKeyEvent;

```

<br/>

### useKeyLetterCodes 👩🏻‍💻✍🏻

This is hook is similar to the useKeyEvent hook but also returns the keycode end code

``` tsx
import * as React from "react";

const useKeyLetterCodes = () => {
  const [letter, setLetter] = React.useState<string>("");
  const [keyCode, setKeyCode] = React.useState<number>(0);
  const [code, setCode] = React.useState<string>("");

  const handleKeyEvent = (event: KeyboardEvent) => {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      setLetter(event.key);
      setKeyCode(event.keyCode);
      setCode(event.code);
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyEvent);

    return () => {
      window.removeEventListener("keydown", handleKeyEvent);
    };
  });

  return [letter, keyCode, code];
};

export default useKeyLetterCodes;

```

<br/>

### useLocalStorage hook 🏬

If you using server side rendered code with react for example Next Js , then it could be a good idea to start the hook with

``` js
  const item = typeof window === "object" ? window.localStorage.getItem(key) : null;
```

``` tsx
import * as React from "react";

function useLocalStorage(key: string, initialValue: string) {
  const item =
    typeof window === "object" ? window.localStorage.getItem(key) : null;
  const [value, setValue] = React.useState<string>(item || initialValue);

  React.useEffect(() => {
    if (!item) {
      setValue(initialValue);
    }

    window.localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
}

export default useLocalStorage;

```

<br />

### useTheme hook ⚓️🎨

Also a good example where wu use another custom hook in another custom hook.

``` tsx
import * as React from "react";
import useLocalStorage from "./useLocalStorage";

type UseThemeReturnType = [
  string,
  React.Dispatch<React.SetStateAction<string>>
];

const useTheme = (
  themeKey: string,
  initialThemeValue: string
): UseThemeReturnType => {
  const [theme, setTheme] = useLocalStorage(themeKey, initialThemeValue);

  React.useEffect(() => {
    document.body.className = "";
    document.body.classList.add(theme);
    // If using redux or context API
    // You could dispatch it to your initialState
    // and handle it from there
  }, [theme]);

  return [theme, setTheme];
};
export default useTheme;

```
