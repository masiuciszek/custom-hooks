import * as React from "react";
function useLocalStorage<T>(initialState: T) {
  const [state, setState] = React.useState<T>(initialState);
}

export default useLocalStorage;
