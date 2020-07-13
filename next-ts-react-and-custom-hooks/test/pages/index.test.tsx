import React from "react";
import Home from "../../pages/index";
import { render } from "@testing-library/react";

describe("Home Page", () => {
  test("should ", () => {
    const x = render(<Home />);
    expect(x.asFragment()).toMatchSnapshot();
  });
});
