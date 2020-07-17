import Link from "next/link";
import * as React from "react";
import { useSiteState } from "../../../context/site.context/Site.context";
import { SmallListStyle } from "./Nav.Styles";

interface Props {}

const SmallList: React.FC<Props> = () => {
  const { isNavOpen } = useSiteState();

  return (
    <SmallListStyle
      style={{ transform: isNavOpen ? `translateY(0%)` : `translateY(-1000%)` }}
    >
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About </a>
        </Link>
      </li>
      <li>
        <Link href="/faq">
          <a>Faq</a>
        </Link>
      </li>
    </SmallListStyle>
  );
};

export default SmallList;
