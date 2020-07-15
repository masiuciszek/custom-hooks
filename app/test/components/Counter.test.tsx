import * as React from "react";

import { render, fireEvent, cleanup } from "@testing-library/react";
import Layout from "../../components/layout";
import SiteProvider from "../../context/site.context/Site.context";
import Counter from "../../components/counter";

afterEach(cleanup);

describe("<Counter />", () => {
  test("Counter, click events", () => {
    const counter = render(
      <SiteProvider>
        <Layout>
          <Counter />
        </Layout>
      </SiteProvider>
    );

    const counterH1 = counter.getByTestId("h1");
    const btnAdd = counter.getByTestId("add");
    const btnDec = counter.getByTestId("dec");
    const btnReset = counter.getByTestId("reset");

    expect(counter.container.firstChild).toBeDefined();
    expect(counter.getByText(/add/gi));
    expect(btnAdd).toBeDefined();
    expect(counterH1.textContent).toBe("0");
    fireEvent.click(btnAdd);
    expect(counterH1.textContent).toBe("1");
    fireEvent.click(btnAdd);
    fireEvent.click(btnAdd);
    expect(counterH1.textContent).toBe("3");
    fireEvent.click(btnDec);
    expect(counterH1.textContent).toBe("2");
    fireEvent.click(btnDec);
    expect(counterH1.textContent).toBe("1");
    fireEvent.click(btnReset);
    expect(counterH1.textContent).toBe("0");
  });
});
