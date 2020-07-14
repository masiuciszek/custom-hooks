import * as React from "react";
import styled from "styled-components";

import useToggle from "../../../hooks/useToggle";
import { SecondaryTitle } from "../../styled/Texts";
import { handleFlex } from "../../styled/utils/handleFlex";
import NavList from "./NavList";

interface Props {
  className: string;
}

const Nav: React.FC<Props> = ({ className }) => {
  const [isOn, toggleIsOn] = useToggle(false);

  // const withCallBack = React.useCallback(() => {
  //   toggleIsOn();
  // }, [isOn]);

  return (
    <nav className={className}>
      <SecondaryTitle>
        <h4>React Hooks</h4>
      </SecondaryTitle>

      <NavList />
      <span id="nav-icon" onClick={toggleIsOn}>
        🍔
      </span>
    </nav>
  );
};

export default styled(Nav)`
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 15rem;
  background: transparent;
  ${handleFlex("row", "space-between", "center")};
  font-size: 2rem;
  position: relative;
  #nav-icon {
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    cursor: pointer;
    font-size: 3rem;
  }
`;
