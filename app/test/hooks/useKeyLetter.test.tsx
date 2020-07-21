import { renderHook, act } from "@testing-library/react-hooks";
import useKeyLetterCodes from "../../hooks/useKeyLetter";

describe("useKeyLetter", () => {
  test("useKeyLetter hook", () => {
    const { result } = renderHook(() => useKeyLetterCodes());

    expect(result.current[0]).toBe("");
    expect(result.current[1]).toBe(0);
    expect(result.current[2]).toBe("");
  });

  test("when using useKeyLetter hook", () => {
    const { result } = renderHook(() => useKeyLetterCodes());

    act(() => {
      result.current[0] = "apa";
      result.current[1] = 33;
    });
    expect(result.current[0]).toBe("apa");
    expect(result.current[1]).not.toBe(0);
    expect(result.current[1]).toBe(33);
  });
});
