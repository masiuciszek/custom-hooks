import * as React from "react";
import { act, renderHook } from "@testing-library/react-hooks";
import useQuote from "../../hooks/useQuote";

describe("useQuote", () => {
  test("should have correct props ", async () => {
    const { result } = renderHook(() => useQuote());
    expect(result.current).toHaveProperty("quote");
    expect(result.current).toHaveProperty("isLoading");
    expect(typeof result.current.quote).toBe("string");

    expect(typeof result.current.isLoading).toBe("boolean");
  });
  test("should set loading to true after initial call", async () => {
    const { result } = renderHook(() => useQuote());
    expect(result.current.isLoading).toBe(true);
  });
  test("should set loading to false when starting to fetch", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useQuote());
    await waitForNextUpdate();

    expect(result.current.quote.length).toBeGreaterThan(0);
    expect(result.current.isLoading).toBe(false);
  });
});
