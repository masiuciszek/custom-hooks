import styled from "styled-components";

export const BoxStyles = styled.div`
  padding: 1rem;
  width: 24rem;
  height: 14rem;
  margin: 1rem;
  box-shadow: ${(props) => props.theme.shadow.elevations[3]};
  color: ${(props) => props.theme.colors.primary};
  font-size: 3rem;
  text-align: center;
  p {
    padding: 1rem;
    span {
      color: ${(props) => props.theme.colors.btnBg};
      padding: 0 1rem;
    }
  }
`;
