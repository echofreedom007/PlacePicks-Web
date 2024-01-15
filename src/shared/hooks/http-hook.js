import { useState, useCallback, useRef, useEffect } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);
      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);
      try {
        // Important: NO error is thrown if the request is sent and the response contains a
        // non-success error code (i.e. 4xx or 5xx).
        // In such a case, you still end up in the then() block and you have to handle the error there.
        const response = await fetch(url, {
          method,
          body,
          headers,
          //This allows you to abort the request if needed,
          // for example, when the component is unmounted or
          // when you want to cancel an ongoing request.
          signal: httpAbortCtrl.signal,
        });
        // parse the response body, return a promise, we can also use await
        const responseData = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortCtrl
        );

        // since fetch will not throw error even when the response contain error from backend,
        // we should catch error here, and this block here will trigger the catch block
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setIsLoading(false);
        return responseData;
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
        throw err;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    // cleanup function is executed when the component unmounts,
    // ensuring that any ongoing HTTP requests are canceled to avoid
    // potential issues with updating state on an unmounted component.
    return () => {
      activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return { isLoading, error, sendRequest, clearError };
};
