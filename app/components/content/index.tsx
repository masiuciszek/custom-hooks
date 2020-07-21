import * as React from "react";
import { ContentStyles } from "./Content.styles";

interface Props {
  loremAmount?: number;
  lettersAmount?: number;
}

const Content: React.FC<Props> = ({ loremAmount, lettersAmount }) => {
  const [loremText, setLoremText] = React.useState<Array<string>>([]);
  const [alphabet, setAlphabet] = React.useState<string[]>([]);

  const handleText = () => {
    const xs = new Array(lettersAmount || 2)
      .fill(1)
      .map((_, index) => String.fromCharCode(65 + index));
    setAlphabet(xs);

    const xss = new Array(loremAmount || 0).fill(
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil cupiditate eligendi eos impedit nisi laboriosam saepe obcaecati officia, repellendus commodi assumenda quod excepturi voluptatem aliquam deserunt autem qui, consectetur quaerat."
    );

    setLoremText(xss);
  };

  React.useEffect(() => {
    handleText();
  }, []);

  return (
    <ContentStyles>
      {alphabet.map((alphabet) => (
        <h2 key={alphabet}>{alphabet}</h2>
      ))}

      {loremAmount && loremText.map((text, index) => <p key={index}>{text}</p>)}
    </ContentStyles>
  );
};
export default Content;
