import * as React from "react";
import useKeyLetterCodes from "../../hooks/useKeyLetter";
import styled from "styled-components";
import { handleFlex } from "../styled/utils/handleFlex";

interface Props {
  className: string;
}

const KeyApp: React.FC<Props> = ({ className }) => {
  const [letter, keyCode, code] = useKeyLetterCodes();

  return (
    <div className={className}>
      <h3>
        Letter <span>{letter}</span>{" "}
      </h3>
      <h3>
        KeyCode <span>{keyCode}</span>{" "}
      </h3>
      <h3>
        Code <span>{code}</span>{" "}
      </h3>
    </div>
  );
};

export default styled(KeyApp)`
  padding: 2rem;
  ${handleFlex("row", "space-evenly", "center")}
  width: 100%;
  margin: 5rem auto;
  h3 {
    display: block;
    margin: 1rem;
    font-size: 2rem;
    padding: 2rem;
    border: ${(props) => props.theme.colors.btnBg} 2px solid;
    flex: 1;
    text-align: center;
    background: ${(props) => props.theme.colors.text};
    color: ${(props) => props.theme.colors.primary};
    ${(props) => props.theme.shadow.elevations[2]};
    transition: ${({ theme }) => theme.transition.mainTransition};

    &:hover {
      transform: rotate(12deg) scale(0.98);
      ${(props) => props.theme.shadow.elevations[1]};
    }
  }
  span {
    color: ${(props) => props.theme.colors.btnBg};
  }
`;
