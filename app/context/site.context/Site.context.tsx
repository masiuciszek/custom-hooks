import * as React from "react";
import SiteReducer from "./Site.reducer";

export type Action = { type: "SET_NAV_DATA"; payload: NavLink[] };
type Dispatch = (action: Action) => void;
export type State = { navData: NavLink[] };

interface Props {
  children: React.ReactNode;
}

const initialState: State = {
  navData: [],
};

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
