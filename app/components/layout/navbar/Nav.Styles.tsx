import styled from "styled-components";
import { handleFlex } from "../../styled/utils/handleFlex";

export const NavListStyles = styled.ul`
  ${handleFlex("row", "center", "center")};

  padding: 1rem 2rem;
  margin-right: 3rem;
  li {
    padding: 1rem;
    transform: ${({ theme }) => theme.transition.mainTransition};
    &:hover {
      border-bottom: none !important;
    }
  }
  a {
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
    transform: ${({ theme }) => theme.transition.mainTransition};
    position: relative;
    display: block;
    font-weight: 700;
    &:after {
      content: "";
      transition: ${({ theme }) => theme.transition.mainTransition};
      width: 0%;
      height: 0;
      background: ${({ theme }) => theme.colors.btnBg};
      position: absolute;
      bottom: 0;
      left: 0;
    }
    &:hover {
      &:after {
        padding: 0.1rem;
        width: 100%;
        height: 0.2rem;
      }
    }
  }
`;

export const SmallListStyle = styled(NavListStyles)`
  transition: ${({ theme }) => theme.transition.mainTransition};
  transition: 800ms ease all;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  ${handleFlex("column", "center", "center")};
  li {
  }
  a {
    color: ${(props) => props.theme.colors.primary};
    font-size: 3rem;
  }
`;
