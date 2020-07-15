import { useEffect } from "react";

type FnTypeHook = Fn;

export const useMount = (fn: FnTypeHook): void => {
  useEffect(() => {
    fn();
  }, []);
};
export const useUnmount = (fn: FnTypeHook): void => {
  useEffect(() => {
    return () => {
      fn();
    };
  });
};
