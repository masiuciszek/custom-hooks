import * as React from "react";
import { SimpleWrapper } from "../styled/Elements";
import Box from "./Box";

interface Props {
  boxAmount: number;
}

const Boxes: React.FC<Props> = ({ boxAmount }) => {
  const [boxes, setBoxes] = React.useState<Array<number>>([
    ...Array(boxAmount).keys(),
  ]);

  return (
    <SimpleWrapper>
      <h3>Boxes</h3>
      {boxes.map((box) => (
        <Box key={box + 1} onBox={box + 1} />
      ))}
    </SimpleWrapper>
  );
};
export default Boxes;
