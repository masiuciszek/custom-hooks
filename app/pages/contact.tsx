import { NextPage } from "next";
import CookieExp from "../components/cookieExp";
import Counter2 from "../components/counter/Counter2";
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
      <Counter2 />
      <CookieExp />
    </>
  );
};

export default ContactPage;
