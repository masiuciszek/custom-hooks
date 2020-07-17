import styled from "styled-components";

export const CookieTitle = styled.h1`
  span {
    color: ${(props) => props.theme.colors.btnBg};
    border-bottom: 3px solid ${(props) => props.theme.colors.btnBg};
  }
`;
