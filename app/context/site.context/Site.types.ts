export enum ActionTypes {
  SET_NAV_DATA = "SET_NAV_DATA",
  TOGGLE_NAV = "TOGGLE_NAV",
}

export type Dispatch = (action: Action) => void;
type ThemeType = "light" | "dark";

export type State = {
  navData: NavLink[];
  isNavOpen: boolean;
  theme: ThemeType;
};

export const initialState: State = {
  navData: [],
  isNavOpen: false,
  theme: "light",
};

interface SetNavDataAction {
  type: "SET_NAV_DATA";
  payload: NavLink[];
}

interface ToggleNav {
  type: "TOGGLE_NAV";
}
interface SetTheme {
  type: "SET_THEME";
  payload: string;
}

export type Action = SetNavDataAction | ToggleNav | SetTheme;
