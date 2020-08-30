import { GetServerSideProps, NextPage } from "next";
import Data from "../components/data";
import Hover from "../components/hover";
import Title from "../components/title";

interface Props {
  url: string;
}

const FaqPage: NextPage<Props> = ({ url }) => {
  return (
    <>
      <Title
        className="Faq-Title"
        mainTitle="React Hooks"
        secondaryTitle="React hooks with Marcell"
      />
      <Data url={url} />
      {/* <Hover /> */}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: { url: "https://swapi.dev/api/films/1/" } };
};

export default FaqPage;
