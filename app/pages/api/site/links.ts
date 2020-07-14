import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const navLinks: NavLink[] = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "About",
      path: "/about",
    },
    {
      text: "Faq",
      path: "/faq",
    },
    {
      text: "Contact",
      path: "/contact",
    },
  ];

  res.status(200).json({ msg: "nav Links is here ! 💪🏻", data: navLinks });
}
