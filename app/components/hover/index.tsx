import * as React from "react";
import Card from "../card";
import { SimpleWrapper } from "../styled/Elements";

interface Props {}

const Hover: React.FC<Props> = () => {
  const [images, setImages] = React.useState(Array.from(Array(10).keys()));

  return (
    <SimpleWrapper>
      {images.map((img, i) => (
        <Card key={img} />
      ))}
    </SimpleWrapper>
  );
};
export default Hover;
