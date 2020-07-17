import { renderHook, act } from "@testing-library/react-hooks";
import useScrollFreeze from "../../hooks/useScrollFreeze";

describe("useScrollFreeze", () => {
  test("should increment counter", () => {
    const { result } = renderHook(() => useScrollFreeze());

    act(() => {
      result.current;
    });

    expect(document.body.style.overflow).toBeDefined();
    expect(document.body.style.overflow).toBe("hidden");
  });
});
