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
