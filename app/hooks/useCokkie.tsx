import * as React from "react";
import Cookies from "js-cookie";

type UseCookieReturnType = [
  string,
  React.Dispatch<React.SetStateAction<string>>
];

interface Key {
  key: string;
}

export const useCookie = ({ key }: Key): UseCookieReturnType => {
  const initialCookie = Cookies.get(key);
  const [cookie, setStateCookie] = React.useState<string>(initialCookie);

  React.useEffect(() => {
    Cookies.set(key, cookie);
  }, [cookie, key]);

  return [cookie, setStateCookie];
};
