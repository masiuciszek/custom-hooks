import * as React from "react";

type Handler = (event: MouseEvent | TouchEvent) => void;

const useClickOutside = (
  inputRef: React.MutableRefObject<HTMLElement>,
  handler: Handler
): void => {
  React.useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (
        !inputRef.current ||
        inputRef.current.contains(event.target as Node)
      ) {
        return;
      }

      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler, inputRef]);
};

export { useClickOutside };
