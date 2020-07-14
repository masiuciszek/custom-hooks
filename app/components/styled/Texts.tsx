import styled from "styled-components";

export const SecondaryTitle = styled.div`
  padding: 0.5rem 2rem;
  h4 {
    font-size: 3rem;
    border-bottom: 2px solid ${(props) => props.theme.colors.text};
  }
`;
