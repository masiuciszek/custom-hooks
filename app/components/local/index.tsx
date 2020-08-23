import * as React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { InputEl } from "../styled/FormElements";

interface Props {}

// For testing use local storage hook
const Local: React.FC<Props> = () => {
  const [value, setValue] = useLocalStorage("key", "initialValue");

  return (
    <>
      <h1 data-testid="local-h1">{value || ""}</h1>
      <InputEl
        type="text"
        // value={typeof value === "string" ? value : ""}
        value={value}
        data-testid="local-input"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
    </>
  );
};
export default Local;
