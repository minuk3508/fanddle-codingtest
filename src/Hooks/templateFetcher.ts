import { useCallback, useEffect, useState } from "react";
import { useRecoilValueLoadable } from "recoil";
import {
  recomendCategoryDetailSelector,
  recomendCategorySelector,
  recomendSelector,
} from "../Store/fetcherStore";

type SelectorOfTheme = "all" | "category" | "detail";

export default function useFetchTemplate(keyword: SelectorOfTheme) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  let Response = useRecoilValueLoadable(recomendSelector);
  const all = useRecoilValueLoadable(recomendSelector);
  const category = useRecoilValueLoadable(recomendCategorySelector);
  const detail = useRecoilValueLoadable(recomendCategoryDetailSelector);

  if (keyword === "all") {
    Response = all;
  } else if (keyword === "category") {
    Response = category;
  } else if (keyword === "detail") {
    Response = detail;
  }

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
