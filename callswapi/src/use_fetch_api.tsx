import { useEffect, useState } from "react";
export const useFetchAPI = <T,>(url: string) => {
  const [data, setData] = useState<T>();
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        setIsFetching(false);
        if (response.status === 200) {
          const json = await response.json();
          setData(json);
        }
      } catch (e: unknown) {
        setIsFetching(false);
        console.log(e);
      }
    };
    fetchData();
  }, [url]);
  return { data, isFetching };
};
