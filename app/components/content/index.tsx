import * as React from "react";
import { ContentStyles } from "./Content.styles";

interface Props {
  loremAmount?: number;
  lettersAmount?: number;
}

const Content: React.FC<Props> = ({ loremAmount = 0, lettersAmount = 2 }) => {
  const [loremText, setLoremText] = React.useState<Array<string>>([]);
  const [alphabet, setAlphabet] = React.useState<string[]>([]);

  const handleText = () => {
    const xs = new Array(lettersAmount)
      .fill(1)
      .map((_, index) => String.fromCharCode(65 + index));
    setAlphabet(xs);

    const xss = new Array(loremAmount).fill(
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil cupiditate eligendi eos impedit nisi laboriosam saepe obcaecati officia, repellendus commodi assumenda quod excepturi voluptatem aliquam deserunt autem qui, consectetur quaerat."
    );

    setLoremText(xss);
  };

  React.useEffect(() => {
    handleText();
  }, []);

  return (
    <ContentStyles>
      {lettersAmount && <h1 data-testid="alpha">Letters</h1>}
      {alphabet.map((alphabet) => (
        <h2 key={alphabet}>{alphabet}</h2>
      ))}

      {loremAmount && loremText.map((text, index) => <p key={index}>{text}</p>)}
    </ContentStyles>
  );
};
export default Content;
