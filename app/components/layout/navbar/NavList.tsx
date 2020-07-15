import * as React from "react";
import { useSiteState } from "../../../context/site.context/Site.context";
import { NavListStyles } from "./Nav.Styles";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {}

const NavList: React.FC<Props> = () => {
  const { navData } = useSiteState();
  const router = useRouter();

  return (
    <NavListStyles>
      {navData &&
        navData.map((navItem) => (
          <li
            key={navItem.text}
            style={{
              borderBottom:
                router && router.pathname === navItem.path
                  ? "2px solid #0277BD"
                  : "none",
            }}
          >
            <Link href={navItem.path}>
              <a>{navItem.text}</a>
            </Link>
          </li>
        ))}
    </NavListStyles>
  );
};
export default NavList;
