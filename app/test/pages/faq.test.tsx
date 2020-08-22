import * as React from "react";
import { screen, render } from "@testing-library/react";
import FaqPage from "../../pages/faq";
import SiteProvider from "../../context/site.context/Site.context";
import Layout from "../../components/layout";

describe("<Faq/>", () => {
  test("should render correct content", () => {
    render(
      <SiteProvider>
        <Layout>
          <FaqPage />
        </Layout>
      </SiteProvider>
    );

    expect(screen.getAllByText(/react hooks/gi)).toBeDefined();
    expect(screen.getAllByText(/marcell/gi)).toBeDefined();
  });
});
