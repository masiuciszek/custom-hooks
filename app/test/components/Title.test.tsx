import * as React from "react";
import Title from "../../components/title";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Layout from "../../components/layout";

describe("<Title />", () => {
  test("Title", () => {
    const { container, queryAllByText } = render(
      <Layout>
        <Title
          className="test-title"
          mainTitle="Testing123"
          secondaryTitle="hello"
        />
      </Layout>
    );

    expect(container.firstChild).toBeDefined();
    expect(queryAllByText(/testing123/gi)).toBeDefined();
    expect(queryAllByText(/testing123/gi)).toBeDefined();
  });
});
