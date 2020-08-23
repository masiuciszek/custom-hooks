import * as React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Layout from "../../components/layout";
import SiteProvider from "../../context/site.context/Site.context";
import Card from "../../components/card";

const renderWithContext = (component) => {
  return {
    ...render(
      <SiteProvider>
        <Layout>{component}</Layout>
      </SiteProvider>
    ),
  };
};

afterEach(cleanup);
describe("<Card/>", () => {
  test("Card component", () => {
    const { findByTestId, container, debug } = renderWithContext(<Card />);
    const img = findByTestId("card-image");

    expect(img).toBeDefined();
    expect(container.firstChild).toBeDefined();
  });
});
