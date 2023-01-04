import { useCallback, useEffect, useState } from "react";
import { useRecoilValueLoadable } from "recoil";
import { inBoxSelector } from "../Store/fetcherStore";

export default function useFetchInBox() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<any>();

  const Response = useRecoilValueLoadable(inBoxSelector);

  const requestFetchTodos = useCallback((): void => {
    if (Response === null || Response === undefined) {
      return;
    }

    switch (Response.state) {
      case "loading":
        setIsLoading(true);
        break;

      case "hasValue":
        setIsLoading(false);
        setData(Response.contents);
        break;

      case "hasError":
        setIsError(false);
        setIsLoading(false);
        break;

      default:
        return;
    }
  }, [Response]);

  useEffect(() => {
    requestFetchTodos();
  }, [requestFetchTodos]);

  return {
    isLoading,
    isError,
    data,
  };
}
