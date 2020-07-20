import { NextPage } from "next";
import KeyApp from "../components/key_app";
import Local from "../components/local";
import Title from "../components/title";

const KeyAppPage: NextPage = () => {
  return (
    <>
      <Title
        className="Key-App-Title"
        mainTitle="React Hooks"
        secondaryTitle="React hooks with Marcell"
      />
      <KeyApp className="keyApp" />
      <Local />
    </>
  );
};

export default KeyAppPage;
