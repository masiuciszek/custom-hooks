import * as React from "react";

import useWindowWidth from "../../hooks/useWindowWidth";
import Card from "../card";
import { SimpleWrapper } from "../styled/Elements";

interface Props {}

const Hover: React.FC<Props> = () => {
  const [images, setImages] = React.useState(Array.from(Array(10).keys()));
  const windowWidth = useWindowWidth();

  return (
    <SimpleWrapper style={{ transform: windowWidth < 900 && "rotate(2deg)" }}>
      {images.map((img) => (
        <Card key={img} />
      ))}
    </SimpleWrapper>
  );
};
export default Hover;
