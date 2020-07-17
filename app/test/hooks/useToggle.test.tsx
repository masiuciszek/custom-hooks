import { renderHook, act } from "@testing-library/react-hooks";
import useToggle from "../../hooks/useToggle";

describe("useToggle", () => {
  test("should be correct type ", () => {
    const toggle = renderHook(() => useToggle());

    act(() => {
      toggle.result.current[0];
    });

    expect(typeof toggle.result.current[0]).toBe("boolean");
    expect(typeof toggle.result.current[1]).toBe("function");
    expect(toggle.result.current[0]).toBe(false);
  });
});
