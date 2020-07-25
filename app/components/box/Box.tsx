import * as React from "react";
import { BoxStyles } from "./Styles.box";
import useSize from "../../hooks/useSize";

interface Props {
  onBox: number;
}

const BoxItem: React.FC<Props> = ({ onBox }) => {
  const colors = ["#9CCC65", "#FF8A65", "#F06292", "#C62828"];

  const [{ width, height }, wrappedRef] = useSize({ width: 0, height: 0 });

  const randomColors = (colorsList: string[]): string => {
    return colors[Math.floor(Math.random() * colorsList.length)];
  };

  return (
    <BoxStyles
      style={{ backgroundColor: randomColors(colors) }}
      ref={wrappedRef}
    >
      <h4>{onBox}</h4>
      <p>
        {width}
        <span>X</span> {height}
        <span>Y</span>
      </p>
    </BoxStyles>
  );
};
export default BoxItem;
