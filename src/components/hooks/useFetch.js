import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    console.log("trexw");
    setIsLoading(() => true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      setData(() => data);
      setIsLoading(() => false);
    } catch (err) {
      //   setIsLoaded(true);
      //   setError(error);
      //   console.error(err);
    }
  }, [url]);

  return { data, isLoading };
};
export default useFetch;
