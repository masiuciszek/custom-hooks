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
