import * as React from "react";
import { ImgCardWrapperStyles } from "../styled/Elements";

interface Props {
  imgUrl?: string;
}

const Card: React.FC<Props> = ({ imgUrl }) => {
  const options = {
    img: imgUrl || "img.jpg",
  };

  return (
    <ImgCardWrapperStyles>
      <img src={options.img} alt="img-fight" />
    </ImgCardWrapperStyles>
  );
};
export default Card;
