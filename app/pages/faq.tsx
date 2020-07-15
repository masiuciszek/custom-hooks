import { NextPage } from "next";
import Hover from "../components/hover";
import Title from "../components/title";

interface Props {}

const FaqPage: NextPage<Props> = () => {
  return (
    <>
      <Title
        className="Faq-Title"
        mainTitle="React Hooks"
        secondaryTitle="React hooks with Marcell"
      />
      <Hover />
    </>
  );
};

export default FaqPage;
