import { useEffect } from "react";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Title from "../components/title";
import { useSiteDispatch } from "../context/site.context/Site.context";
import ThemeComp from "../components/themeEx";
import Content from "../components/content";

interface Props {
  data: NavLink[];
  done: boolean;
}

const IndexPage: NextPage<Props> = ({ data, done }) => {
  const dispatch = useSiteDispatch();

  useEffect(() => {
    if (done) {
      dispatch({ type: "SET_NAV_DATA", payload: data });
    }
  }, []);

  return (
    <>
      <Title
        className="Home-Title"
        mainTitle="React Hooks"
        secondaryTitle="React hooks with Marcell"
      />
      <ThemeComp />

      <Content loremAmount={60} />
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
      done: ctx.req.complete,
      data: linksResponse,
    },
  };
};

export default IndexPage;
