import * as React from "react";
import { useCookie } from "../../hooks/useCokkie";
import { SimpleWrapper } from "../styled/Elements";
import { InputEl } from "../styled/FormElements";
import { CookieTitle } from "./Cookie.styles";

interface Props {}

const CookieExp: React.FC<Props> = () => {
  const [cookie, setCookie] = useCookie({ key: "test" });
  return (
    <SimpleWrapper>
      <CookieTitle>
        {" "}
        {cookie && "The Stored Cookie is  !!! "} <span>{cookie || ""}</span>
      </CookieTitle>
      <InputEl
        type="text"
        value={cookie}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCookie(e.target.value)
        }
      />
    </SimpleWrapper>
  );
};
export default CookieExp;
