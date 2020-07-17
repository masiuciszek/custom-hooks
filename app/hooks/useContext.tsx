import * as React from "react";

export function useContextHandle<T>(
  contextValue: React.Context<T> | undefined
) {
  const context = React.useContext(contextValue);
  if (context === undefined) {
    throw new Error(`context need to be wrapped inside Provider`);
  }
  return context;
}
