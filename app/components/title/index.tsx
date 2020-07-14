import * as React from "react";
import styled from "styled-components";
import { handleFlex } from "../styled/utils/handleFlex";

interface Props {
  className: string;
  mainTitle: string;
  secondaryTitle?: string;
}

const Title: React.FC<Props> = ({ className, mainTitle, secondaryTitle }) => {
  function handleSpan(s: string) {
    return s
      .split(" ")
      .map((x) => `<span>${x}</span>`)
      .join(" ");
  }

  return (
    <section className={className}>
      <h1>{mainTitle}</h1>

      {secondaryTitle && (
        <h3 dangerouslySetInnerHTML={{ __html: handleSpan(secondaryTitle) }} />
      )}
    </section>
  );
};

export default styled(Title)`
  padding: 2rem 1.5rem;

  ${handleFlex("column", "center", "center")};
  h1 {
    border-bottom: 2px solid #333;
  }
  h3 {
    span {
      &:nth-child(1) {
        color: ${({ theme }) => theme.colors.btnBg};
        text-decoration: underline 2px solid ${({ theme }) => theme.colors.text};
      }
      &:nth-child(3) {
        color: ${({ theme }) => theme.colors.btnBg};
        text-decoration: underline 2px solid ${({ theme }) => theme.colors.text};
      }
    }
  }
`;
