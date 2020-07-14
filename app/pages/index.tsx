import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Title from "../components/title";

interface Props {
  data: NavLink[];
}

const IndexPage: NextPage<Props> = ({ data }) => {
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

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext<ParsedUrlQuery>
) => {
  if (!ctx.req) {
    return;
  }
  const startFetch = await fetch("http://localhost:3000/api/site/links");
  const resData: ApiResponse<NavLink> = await startFetch.json();
  const linksResponse = resData.data;

  return {
    props: {
      data: linksResponse,
    },
  };
};

export default IndexPage;
