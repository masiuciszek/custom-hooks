import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  href: string;
  children: React.ReactNode;
  className: string;
}

const ActiveLink: React.FC<Props> = ({ href, children, className }) => {
  const router = useRouter();
  let classNameProps = className || "";

  if (router.pathname === href) {
    classNameProps = `${classNameProps} selected`;
  }
  return <Link></Link>;
};
export default ActiveLink;
