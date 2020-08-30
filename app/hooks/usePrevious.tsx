import * as React from "react";

function usePrevious<T>(initialValue: T): T {
  const ref = React.useRef<T>();

  React.useEffect(() => {
    ref.current = initialValue;
    // Only re-run if value changes
  }, [initialValue]);

  return ref.current;
}

export default usePrevious;
