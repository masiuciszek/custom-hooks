import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Title from "../components/title";
interface Props {}

const IndexPage: NextPage<Props> = () => {
  return (
    <>
      <Title
        className="Home-Title"
        mainTitle="React Hooks"
        secondaryTitle="React hooks with Marcell"
      />
    </>
  );
};

// export const getServersideProps: GetServerSideProps = async (
//   ctx: GetServerSidePropsContext<ParsedUrlQuery>
// ) => {
//   if (!ctx.req) {
//     return;
//   }
//   const startFetch = await fetch("http://localhost:3000/api/site/links");
//   const resData = await startFetch.json();

//   return {
//     props: {
//       data: resData,
//     },
//   };
// };

export default IndexPage;
