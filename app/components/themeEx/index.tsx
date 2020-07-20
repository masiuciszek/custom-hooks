import * as React from "react";
import { useSiteDispatch } from "../../context/site.context/Site.context";
import useTheme from "../../hooks/useTheme";

interface Props {}

const ThemeComp: React.FC<Props> = () => {
  const [theme, setTheme] = useTheme("theme", "light");

  const dispatch = useSiteDispatch();

  React.useEffect(() => {
    dispatch({ type: "SET_THEME", payload: theme });
  }, [theme]);

  return (
    <div>
      <h3>Choose theme</h3>
      <select
        name=""
        id=""
        defaultValue={theme}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setTheme(e.target.value)
        }
      >
        <option disabled>choose theme</option>
        <option value="light">light</option>
        <option value="dark">dark</option>
      </select>
    </div>
  );
};
export default ThemeComp;
