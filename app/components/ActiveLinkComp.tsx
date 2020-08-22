import * as React from "react";
import Link from "next/link";
// import { useRouter } from "next/router";

interface Props {
  href: string;
  text: string;
}

const ActiveLinkComp: React.FC<Props> = ({ href, text }) => {
  // const { pathname } = useRouter();

  return (
    <Link href={href}>
      {" "}
      <a>{text}</a>{" "}
    </Link>
  );

  // return pathname === href ? (
  //   <ActiveLink href={href}>{children} </ActiveLink>
  // ) : (
  //   <Link href={href}>{children}</Link>
  // );
};
export default ActiveLinkComp;
