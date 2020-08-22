import * as React from "react";
import Title from "../../components/title";
import { render, screen } from "@testing-library/react";
import Layout from "../../components/layout";
import SiteProvider from "../../context/site.context/Site.context";

describe("<Title />", () => {
  test("Title", () => {
    const p1 = "apa";
    const p2 = "apa2";
    const { container, queryAllByText } = render(
      <SiteProvider>
        <Layout>
          <Title className="test-title" mainTitle={p1} secondaryTitle={p2} />
        </Layout>
      </SiteProvider>
    );

    expect(container.firstChild).toBeDefined();
    expect(queryAllByText(p1)).toBeDefined();
    expect(queryAllByText(p2)).toBeDefined();
    expect(screen.getByText(p1).textContent).toBe("apa");
    expect(screen.getByText(p2).textContent).toBe("apa2");
  });
});
