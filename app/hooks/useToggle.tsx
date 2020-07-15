import * as React from "react";

type ToggleReturnType = [boolean, Fn];

export default (initialState = false): ToggleReturnType => {
  const [state, setState] = React.useState<boolean>(initialState);

  const toggle = (): void => {
    // setState(!state);
    setState((prevState) => !prevState);
  };

  return [state, toggle];
};
