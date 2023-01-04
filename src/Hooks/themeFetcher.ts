import { useCallback, useEffect, useState } from "react";
import { useRecoilValueLoadable } from "recoil";
import {
  themeCategoryDetailSelector,
  themeCategorySelector,
  themeSelector,
} from "../Store/fetcherStore";

type SelectorOfTheme = "all" | "category" | "detail";

export default function useFetchTheme(keyword: SelectorOfTheme) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  let Response = useRecoilValueLoadable(themeSelector);
  const all = useRecoilValueLoadable(themeSelector);
  const category = useRecoilValueLoadable(themeCategorySelector);
  const detail = useRecoilValueLoadable(themeCategoryDetailSelector);

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
