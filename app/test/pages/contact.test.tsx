import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "../../components/layout";
import SiteProvider from "../../context/site.context/Site.context";
import ContactPage from "../../pages/contact";

describe("Contact Page", () => {
  test("be defined ", () => {
    render(
      <SiteProvider>
        <Layout>
          <ContactPage />
        </Layout>
      </SiteProvider>
    );
    // screen.debug();
    // expect(screen.queryByText(/React Hooks/i)).toBeInTheDocument();
  });
});
