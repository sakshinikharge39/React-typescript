import { useEffect, useState } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T>(url: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });
  //useEffect to make fetch request
  useEffect(() => {
    const fetchData = async () => {
      setState({
        data: null,
        loading: true,
        error: null,
      });

      try {
        const response = await fetch(url);

        if (!response.ok) {
          console.log("Http error found");
        }

        const result : T = await response.json();

        setState({
             data: result,
    loading : false,
    error: null,
        });
      } catch (error) {
        setState({
             data: null,
    loading : false,
    error: error instanceof Error ? error.message: "something went wrong"        
})
      }
    };
    fetchData();
  }, [url]);

  return state;
}
