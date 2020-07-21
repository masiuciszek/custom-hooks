import * as React from "react";
import styled from "styled-components";
import { SecondaryTitle } from "../../styled/Texts";
import { handleFlex } from "../../styled/utils/handleFlex";
import { FooterListWrapper } from "./Footer.styles";

interface Props {
  className: string;
}

const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={className}>
      <SecondaryTitle>
        <h4>React Hooks</h4>
      </SecondaryTitle>

      <FooterListWrapper></FooterListWrapper>
    </footer>
  );
};

export default styled(Footer)`
  padding: 1rem 2rem;
  height: 15rem;
  border: 2px solid ${(props) => props.theme.colors.text};
  ${handleFlex("row", "space-between", "center")};
`;
