import React from "react";
import Home from "../../pages/index";
import { render } from "@testing-library/react";
import Layout from "../../components/layout";
import SiteProvider from "../../context/site.context/Site.context";

describe("Home Page", () => {
  test("should Match Snapshot ", () => {
    const testData: NavLink[] = [
      { path: "/", text: "Home" },
      { path: "/about", text: "About" },
    ];

    const home = render(
      <SiteProvider>
        <Layout>
          <Home data={testData} done={true} />
        </Layout>
      </SiteProvider>
    );
    expect(home.asFragment()).toMatchSnapshot();
  });
});
