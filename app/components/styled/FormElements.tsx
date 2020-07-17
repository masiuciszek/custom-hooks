import styled from "styled-components";

export const FormEl = styled.form``;

export const InputEl = styled.input`
  padding: 0.8rem 1rem;
  font-size: 2rem;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.text};
  margin: 2rem auto;
  transition: ${({ theme }) => theme.transition.quickTransition};
  width: 28rem;
  &:focus {
    outline: 0;
    border-bottom: 2px solid ${({ theme }) => theme.colors.btnBg};
    width: 25rem;
  }
`;
