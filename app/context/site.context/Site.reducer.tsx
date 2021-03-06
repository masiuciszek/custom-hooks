import { Action, State, initialState } from "./Site.types";

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case "SET_NAV_DATA":
      return {
        ...state,
        navData: action.payload,
      };

    case "TOGGLE_NAV":
      return {
        ...state,
        isNavOpen: !state.isNavOpen,
      };
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };

    default: {
      throw new Error(`Unable Action Type`);
    }
  }
};
