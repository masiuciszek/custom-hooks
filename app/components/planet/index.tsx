import * as React from "react";
import useGetData from "../../hooks/useGetData";

interface Props {
  url: string;
}

const Planet: React.FC<Props> = ({ url }) => {
  const { data, isLoading } = useGetData(url);
  console.log(data);
  return (
    <ul>
      <li> {data?.name} </li>
      <li> {data?.diamater} </li>
    </ul>
  );
};
export default Planet;
