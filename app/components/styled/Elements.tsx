import styled from "styled-components";
import { handleFlex } from "./utils/handleFlex";

export const ImgCardWrapperStyles = styled.div`
  width: 60vw;
  margin: 2rem auto;
  transition: ${({ theme }) => theme.transition.quickTransition};
  img {
    width: 100%;
  }
`;

interface SimpleWrapperProps {
  row?: boolean;
}

export const SimpleWrapper = styled.div<SimpleWrapperProps>`
  ${handleFlex("column", "center", "center")};
  padding: 2rem 1rem;
  margin: 2rem auto;
`;
