import * as React from "react";

type DataType<T> = T | null;

function useGetData<T>(url: string) {
  const [data, setData] = React.useState<DataType<T>>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const getData = async (inputUrl: string) => {
      setIsLoading(true);
      const res = await fetch(inputUrl);
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    };
    getData(url);
  }, []);

  return { data, isLoading };
}

export default useGetData;
