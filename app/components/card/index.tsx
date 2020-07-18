import * as React from "react";
import useHover from "../../hooks/useHover";
import useMeasure from "../../hooks/useMeasure";
import { ImgCardWrapperStyles } from "../styled/Elements";

interface Props {
  imgUrl?: string;
}

const Card: React.FC<Props> = ({ imgUrl }) => {
  const [isHovered, bind] = useHover();
  const [{ ref }, bounds] = useMeasure();

  const options = {
    img: imgUrl || "img.jpg",
  };
  console.log(bounds);

  return (
    <ImgCardWrapperStyles
      ref={ref}
      onMouseOver={bind.onMouseOver}
      onMouseLeave={bind.onMouseLeave}
      style={{ padding: isHovered ? "3rem" : "0" }}
    >
      <img src={options.img} alt="img-fight" />
    </ImgCardWrapperStyles>
  );
};
export default Card;
