export enum ActionTypes {
  SET_NAV_DATA = "SET_NAV_DATA",
  TOGGLE_NAV = "TOGGLE_NAV",
}

export type Dispatch = (action: Action) => void;

export type State = { navData: NavLink[]; isNavOpen: boolean };

export const initialState: State = {
  navData: [],
  isNavOpen: false,
};

interface SetNavDataAction {
  type: "SET_NAV_DATA";
  payload: NavLink[];
}

interface ToggleNav {
  type: "TOGGLE_NAV";
}

export type Action = SetNavDataAction | ToggleNav;
