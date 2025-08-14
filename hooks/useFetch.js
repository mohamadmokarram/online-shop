import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function getData() {
      setIsFetching(true);

      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to get data.");

        const resData = await res.json();
        setProducts(resData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsFetching(false);
      }
    }
    getData();
  }, [url]);

  return {
    products,
    setProducts,
    isFetching,
    error,
  };
}
