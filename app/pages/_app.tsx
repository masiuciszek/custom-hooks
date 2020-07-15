import { AppProps } from "next/app";
import Layout from "../components/layout";
import SiteProvider from "../context/site.context/Site.context";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <SiteProvider>
        <Component {...pageProps} />
      </SiteProvider>
    </Layout>
  );
}
