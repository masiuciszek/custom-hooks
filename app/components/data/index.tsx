import * as React from "react";
import useGetData from "../../hooks/useGetData";
import Planet from "../planet";

interface Props {
  url: string;
}

const Data: React.FC<Props> = ({ url }) => {
  const { data, isLoading } = useGetData(url);

  return (
    <div>
      {isLoading ? (
        <h3>...Loading</h3>
      ) : (
        <div>
          <p>{data?.title}</p> <p>{data?.director}</p> <h2>Planets</h2>
          {data?.planets.map((data) => (
            <Planet key={data} url={data} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Data;
