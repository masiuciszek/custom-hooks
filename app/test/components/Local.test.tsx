import { render, screen } from "@testing-library/react";
import Layout from "../../components/layout";
import Local from "../../components/local";
import SiteProvider from "../../context/site.context/Site.context";

describe("<Local/>", () => {
  test("should  render h1", () => {
    render(
      <SiteProvider>
        <Layout>
          <Local />
        </Layout>
      </SiteProvider>
    );
    screen.debug();
    const h1Heading = screen.getByTestId("local-h1");
    const localInput = screen.getByTestId("local-input");

    expect(h1Heading.textContent).not.toBeFalsy();
    expect(h1Heading.textContent).toBe("initialValue");
    expect(localInput).toBeDefined();
    expect(localInput.value).toBe("initialValue");
  });
});
