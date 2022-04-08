import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        return response.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessage("An error occurred");
        setLoading(false);
      });
  }, [url]);

  return { data, isLoading, errorMessage };
}

export default useFetch;
