import { useState } from "react";

const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  return [
    async (url) => {
      setLoading(true);
      setError(null);
      setData(null);
      try {
        let res = await fetch(url);
        res = await res.json();
        setData(res);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    },
    data,
    error,
    loading,
  ];
};

export default useFetch;
