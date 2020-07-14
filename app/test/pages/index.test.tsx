import React from "react";
import Home from "../../pages/index";
import { render } from "@testing-library/react";
import Layout from "../../components/layout";

describe("Home Page", () => {
  test("should ", () => {
    const home = render(
      <Layout>
        <Home />
      </Layout>
    );
    expect(home.asFragment()).toMatchSnapshot();
  });
});
