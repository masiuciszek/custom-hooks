import * as React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import Counter2 from "../../components/counter/Counter2";

afterEach(cleanup);

describe("<Counter />", () => {
  test("Counter, click events", () => {
    render(<Counter2 />);

    const incrementBtn = screen.getByText(/add/i);
    const decrementBtn = screen.getByText(/sub/i);

    const count = screen.getByTestId("count");
    const prevCount = screen.getByTestId("prevCount");

    expect(count.textContent).toBe("0");
    expect(prevCount.textContent).toBe("");
    expect(typeof count.textContent).toBe("string");
    expect(typeof prevCount.textContent).toBe("string");

    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);

    expect(count.textContent).toBe("4");
    expect(prevCount.textContent).toBe("3");

    fireEvent.click(decrementBtn);
    fireEvent.click(decrementBtn);

    expect(count.textContent).toBe("2");
    expect(prevCount.textContent).toBe("3");
    // screen.debug();
  });
});
