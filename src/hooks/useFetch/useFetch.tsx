// Modules
import { useEffect, useState } from "react";

type FetchResponse<T> = {
  data: T | null;
  isLoading: boolean;
  hasError: boolean;
  setApiUrl: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export const useFetch = <T,>(url?: string): FetchResponse<T> => {
  const [apiUrl, setApiUrl] = useState(url);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const doFetch = async () => {
      if (apiUrl) {
        setIsLoading(true);
        setData(null);
        setHasError(false);
        try {
          const res = await fetch(apiUrl);
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          const json = await res.json();
          setData(json);
        } catch (error) {
          setHasError(true);
        } finally {
          setIsLoading(false);
        }
      }
    };
    doFetch();
  }, [apiUrl]);

  return {
    data,
    isLoading,
    hasError,
    setApiUrl,
  };
};
