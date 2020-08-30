import * as React from "react";
import { renderHook } from "@testing-library/react-hooks";
import usePrevious from "../../hooks/usePrevious";

describe("usePrevious", () => {
  test("should render previous value ", () => {
    let num = 0;
    const { result, rerender } = renderHook(() => usePrevious(num));
    expect(result.current).toBe(undefined);

    num = 1;
    rerender(() => usePrevious(num));
    expect(result.current).toBe(0);
  });
});
