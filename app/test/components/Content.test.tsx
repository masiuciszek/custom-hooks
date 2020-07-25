import * as React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Layout from "../../components/layout";
import SiteProvider from "../../context/site.context/Site.context";
import Content from "../../components/content";

afterEach(cleanup);

describe("<Content/>", () => {
  test("Content component when not receiving props", () => {
    const content = render(
      <SiteProvider>
        <Layout>
          <Content />
        </Layout>
      </SiteProvider>
    );

    expect(content.container.firstChild).toBeDefined();
    expect(content.queryByText(/Lorem/gi)).toBeNull();
  });

  test("Content component with props", () => {
    const content = render(
      <SiteProvider>
        <Layout>
          <Content loremAmount={20} lettersAmount={2} />
        </Layout>
      </SiteProvider>
    );
    const alphaH1 = content.getByTestId("alpha");

    expect(alphaH1).not.toBeNull();
    expect(content.queryByText(/letters/gi)).toBeDefined();
  });
});
