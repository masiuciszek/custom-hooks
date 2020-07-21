import styled from "styled-components";
import { handleFlex } from "../styled/utils/handleFlex";

export const ContentStyles = styled.div`
  ${handleFlex("column", "center", "center")}
  p {
    line-height: 8rem;
    font-size: 3rem;
  }
`;
