import Link from "next/link";
import styled from "styled-components";

export const ActiveLink = styled(Link)`
  border: 2px solid red;
`;

export const Btn = styled.button`
  font-size: 1.6rem;
  width: 12rem;
  padding: 0.6rem 1rem;
  border: 0;
  background: ${(props) => props.theme.colors.btnBg};
  color: ${(props) => props.theme.colors.btnText};
  ${({ theme }) => theme.shadow.elevations[2]};
  transition: ${({ theme }) => theme.transition.mainTransition};
  cursor: pointer;
`;
