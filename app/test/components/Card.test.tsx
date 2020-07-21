import * as React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Layout from "../../components/layout";
import SiteProvider from "../../context/site.context/Site.context";
import Card from "../../components/card";

afterEach(cleanup);

describe("<Card/>", () => {
  test("Card component", () => {
    const card = render(
      <SiteProvider>
        <Layout>
          <Card />
        </Layout>
      </SiteProvider>
    );

    const img = card.findByTestId("card-image");
    expect(card.container.firstChild).toBeDefined();
    expect(img).toBeDefined();
  });
});
