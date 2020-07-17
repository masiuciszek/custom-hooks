import * as React from "react";
import styled from "styled-components";
import {
  useSiteDispatch,
  useSiteState,
} from "../../../context/site.context/Site.context";
import { SecondaryTitle } from "../../styled/Texts";
import { handleFlex } from "../../styled/utils/handleFlex";
import NavList from "./NavList";
import SmallList from "./SmallList";

interface Props {
  className: string;
}

const Nav: React.FC<Props> = ({ className }) => {
  const dispatch = useSiteDispatch();
  const { isNavOpen } = useSiteState();

  return (
    <nav className={className}>
      <SecondaryTitle>
        <h4>React Hooks</h4>
      </SecondaryTitle>

      <NavList />
      <SmallList />

      <span id="nav-icon" onClick={() => dispatch({ type: "TOGGLE_NAV" })}>
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
    top: 1.5rem;
    right: 2.5rem;
    cursor: pointer;
    font-size: 3rem;
  }
`;
