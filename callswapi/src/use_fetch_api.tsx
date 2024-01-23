import { useEffect, useState } from "react";
export const useFetchAPI = <T,>(url: string) => {
  const [data, setData] = useState<T>();
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        setIsFetching(false);
        if (response.status === 200) {
          const json = await response.json();
          setData(json);
        } else if (response.status === 500) {
          setIsFetching(false);
          setError("Oops... something went wrong, try again 🤕");
        } else if (response.status === 404 || response.status === 418) {
          setIsFetching(false);
          setError(`${response.status} I'm a tea pot, silly`);
        }
      } catch (e: unknown) {
        setIsFetching(false);
        console.log(e);
      }
    };
    fetchData();
  }, [url]);
  return { data, isFetching, error };
};
