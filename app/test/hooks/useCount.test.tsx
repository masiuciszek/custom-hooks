import { renderHook, act } from "@testing-library/react-hooks";
import useCount from "../../hooks/useCount";

describe("useCount", () => {
  test("should increment counter", () => {
    const { result } = renderHook(() => useCount());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
    expect(typeof result.current.increment).toBe("function");
  });
});
