import * as React from "react";
import Card from "../card";

interface Props {}

const Hover: React.FC<Props> = () => {
  const [imges, setImges] = React.useState(Array.from(Array(10).keys()));

  return (
    <div>
      {imges.map((img, i) => (
        <Card key={img} />
      ))}
    </div>
  );
};
export default Hover;
