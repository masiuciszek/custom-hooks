import { NextPage } from "next";
import CookieExp from "../components/cookieExp";
import Title from "../components/title";

interface Props {}

const ContactPage: NextPage<Props> = () => {
  return (
    <>
      <Title
        className="Contact-Title"
        mainTitle="React Hooks"
        secondaryTitle="React hooks with Marcell"
      />
      <CookieExp />
    </>
  );
};

export default ContactPage;
