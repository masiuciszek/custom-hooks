import { renderHook, act } from "@testing-library/react-hooks";
import useTheme from "../../hooks/useTheme";

describe("useTheme", () => {
  test("testing useTheme hook", () => {
    const themeHook = renderHook(() => useTheme("key", "value"));
    const [theme, setTheme] = themeHook.result.current;

    // console.log(theme.result.current[0]);

    expect(theme).toBeDefined();
    expect(typeof theme).toBe("string");
    expect(theme).toBe("value");
    expect(typeof setTheme).toBe("function");
    // expect(result.current[1]).toBeDefined();

    const handleSetTheme = (value: string) => {
      setTheme(value);
    };

    act(() => {
      handleSetTheme("dark");
    });

    expect(theme).toBeDefined();
    expect(typeof theme).toBe("string");
    expect(themeHook.result.current[0]).toBe("dark");
    expect(theme).not.toBe("dark");
    expect(typeof setTheme).toBe("function");
  });
});
