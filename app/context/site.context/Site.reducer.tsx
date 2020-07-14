import { State, Action } from "./Site.context";
export default (state: State, action: Action) => {
  switch (action.type) {
    case "SET_NAV_DATA":
      return {
        ...state,
        navData: action.payload,
      };

    default: {
      throw new Error(`Unable Action Type`);
    }
  }
};
