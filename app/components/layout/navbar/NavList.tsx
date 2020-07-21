import * as React from "react";
import { useSiteState } from "../../../context/site.context/Site.context";
import { ListItem, NavListStyles } from "./Nav.Styles";
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
          <ListItem
            key={navItem.text}
            isPath={router && router.pathname === navItem.path}
            style={{
              fontSize:
                router && router.pathname === navItem.path ? "2rem" : "1.8rem",
            }}
          >
            <Link href={navItem.path}>
              <a>{navItem.text}</a>
            </Link>
          </ListItem>
        ))}
    </NavListStyles>
  );
};
export default NavList;
