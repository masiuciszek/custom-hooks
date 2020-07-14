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
    </>
  );
};

export default IndexPage;
