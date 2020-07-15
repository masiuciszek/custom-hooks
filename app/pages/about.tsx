import { NextPage } from "next";
import Counter from "../components/counter";
import Title from "../components/title";

interface Props {}

const IndexPage: NextPage<Props> = () => {
  return (
    <>
      <Title
        className="About-Title"
        mainTitle="React Hooks"
        secondaryTitle="React hooks with Marcell"
      />
      <Counter />
    </>
  );
};

export default IndexPage;
