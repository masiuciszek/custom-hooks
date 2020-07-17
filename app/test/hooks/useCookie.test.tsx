import { renderHook, act } from "@testing-library/react-hooks";
import { useCookie } from "../../hooks/useCokkie";

describe("useCookie", () => {
  test("testing cookie hook", () => {
    const { result } = renderHook(() => useCookie({ key: "foo" }));

    act(() => {
      result.current;
    });

    expect(typeof result.current[0]).toBeDefined();
    expect(typeof result.current[1]).toBe("function");
    expect(result.current[1]).toBeDefined();
  });
});
