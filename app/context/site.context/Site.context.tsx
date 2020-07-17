import * as React from "react";
import { State, initialState, Dispatch } from "./Site.types";
import SiteReducer from "./Site.reducer";

interface Props {
  children: React.ReactNode;
}

const SiteStateContext = React.createContext<State | undefined>(undefined);
const SiteDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

const SiteProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(SiteReducer, initialState);
  return (
    <SiteStateContext.Provider value={state}>
      <SiteDispatchContext.Provider value={dispatch}>
        {children}
      </SiteDispatchContext.Provider>
    </SiteStateContext.Provider>
  );
};

export const useSiteState = () => {
  const context = React.useContext(SiteStateContext);
  if (context === undefined) {
    throw new Error("useSiteState must be wrapped with in a provider");
  }
  return context;
};

export const useSiteDispatch = () => {
  const context = React.useContext(SiteDispatchContext);
  if (context === undefined) {
    throw new Error("useSiteDispatch must be wrapped with in a provider");
  }
  return context;
};

export default SiteProvider;
