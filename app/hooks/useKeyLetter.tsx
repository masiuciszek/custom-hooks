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
