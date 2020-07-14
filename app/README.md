# Custom React hooks ⚛️λ🚀🍕

This is application is a code example of how you can build your own custom hooks with React and reuse them in your applications.
If there is any you like , just use them I am just glad they com ein handy! 😎😃🤗

### Tools dor this project 🛠🔧

* Next JS 💥
* Typescript ʦ
* Jest 🃏
* React-testing-library 🐙

### useToggle hook

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
