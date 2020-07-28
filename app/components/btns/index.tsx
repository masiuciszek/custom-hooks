import * as React from "react";
import styled from "styled-components";
import { useClickOutside } from "../../hooks/useClickOutside";
import { Btn } from "../styled/Buttons";
import { handleFlex } from "../styled/utils/handleFlex";
interface Props {}

type State = { isDark: boolean };

const initialState: State = {
  isDark: false,
};

type Action = { type: "DARK" | "LIGHT" };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "DARK":
      return {
        ...state,
        isDark: true,
      };

    case "LIGHT":
      return {
        ...state,
        isDark: false,
      };

    default: {
      throw new Error(`Unable Action Type`);
    }
  }
}

const Btns: React.FC<Props> = () => {
  const ref = React.useRef(null);
  const [state, dispatch] = React.useReducer(reducer, initialState);

  useClickOutside(ref, () => {
    alert("clicked outside, so I will switch back to 'light'");
    dispatch({ type: "LIGHT" });
  });

  return (
    <BtnsWrapper ref={ref}>
      <h1 data-testid="btnsH1">{state.isDark ? "Dark" : "Light"}</h1>
      <Btn data-testid="btn-light" onClick={() => dispatch({ type: "LIGHT" })}>
        Light
      </Btn>
      <Btn data-testid="btn-dark" onClick={() => dispatch({ type: "DARK" })}>
        Dark
      </Btn>
    </BtnsWrapper>
  );
};

const BtnsWrapper = styled.div`
  padding: 3rem;
  ${handleFlex("row", "space-evenly", "center")};
`;

export default Btns;
