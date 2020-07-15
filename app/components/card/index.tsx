import * as React from "react";
import useHover from "../../hooks/useHover";
import { ImgCardWrapperStyles } from "../styled/Elements";

interface Props {
  imgUrl?: string;
}

const Card: React.FC<Props> = ({ imgUrl }) => {
  const [isHovered, bind] = useHover();

  const options = {
    img: imgUrl || "img.jpg",
  };

  return (
    <ImgCardWrapperStyles
      onMouseOver={bind.onMouseOver}
      onMouseLeave={bind.onMouseLeave}
      style={{ padding: isHovered ? "3rem" : "0" }}
    >
      <img src={options.img} alt="img-fight" />
    </ImgCardWrapperStyles>
  );
};
export default Card;
