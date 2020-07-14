import * as React from "react";
import styled from "styled-components";
import { SecondaryTitle } from "../../styled/Texts";
import { handleFlex } from "../../styled/utils/handleFlex";

interface Props {
  className: string;
}

const Nav: React.FC<Props> = ({ className }) => {
  return (
    <nav className={className}>
      <SecondaryTitle>
        <h4>React Hooks</h4>
      </SecondaryTitle>
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
`;
