import * as React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Layout from "../../components/layout";
import SiteProvider from "../../context/site.context/Site.context";
import Btns from "../../components/btns";

afterEach(cleanup);

describe("<Btns/>", () => {
  test("Btns component", () => {
    const btn = render(
      <SiteProvider>
        <Layout>
          <Btns />
        </Layout>
      </SiteProvider>
    );

    const btnsCompTitle = btn.getByTestId("btnsH1");
    const btnLight = btn.getByTestId("btn-light");
    const btnDark = btn.getByTestId("btn-dark");

    expect(btnsCompTitle.textContent).toBe("Light");
    expect(btnsCompTitle.textContent).not.toBe("Dark");

    fireEvent.click(btnDark);

    expect(btnsCompTitle.textContent).not.toBe("Light");
    expect(btnsCompTitle.textContent).toBe("Dark");
  });
});
