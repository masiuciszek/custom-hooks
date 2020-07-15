import React from "react";

import { render } from "@testing-library/react";
import Layout from "../../components/layout";
import AboutPage from "../../pages/about";
import SiteProvider from "../../context/site.context/Site.context";

describe("Home Page", () => {
  test("should match Snapshot ", () => {
    const about = render(
      <SiteProvider>
        <Layout>
          <AboutPage />
        </Layout>
      </SiteProvider>
    );
    expect(about.asFragment()).toMatchSnapshot();
  });
});
