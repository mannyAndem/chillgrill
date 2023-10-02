import { useState } from "react";

const useFetch = (url, options) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  return [
    async () => {
      try {
        let res = await fetch(url, options);
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
