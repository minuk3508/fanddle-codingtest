import axios from "axios";
import { selector } from "recoil";
import { v1 } from "uuid";
import { selectedCategoryState, selectedRecomendCategoryState } from "./statesStore";

const BEARE_TOKEN = process.env.REACT_APP_API_KEY;

export const inBoxSelector = selector({
  key: `inBoxSelector/${v1()}`,
  get: async () => {
    const response = await axios.get(
      "https://prod-app.fanddle.co.kr/gift/recv?giftUid=9a49ba72-dfbe-4ef6-9104-609f77c11ff2",
      {
        headers: { Authorization: `Bearer ${BEARE_TOKEN}` },
      }
    );
    return response.data.data.gift;
  },
});

export const themeSelector = selector({
  key: `themeSelector/${v1()}`,
  get: async () => {
    const response = await axios.get("https://prod-app.fanddle.co.kr/gift/theme/list?type=answer", {
      headers: { Authorization: `Bearer ${BEARE_TOKEN}` },
    });
    return response.data.data.themes;
  },
});
export const themeCategorySelector = selector({
  key: `themeCategorySelector/${v1()}`,
  get: async () => {
    const response = await axios.get("https://prod-app.fanddle.co.kr/gift/theme/categories", {
      headers: { Authorization: `Bearer ${BEARE_TOKEN}` },
    });
    return response.data.data;
  },
});
export const themeCategoryDetailSelector = selector({
  key: `themeCategoryDetailSelector/${v1()}`,
  get: async ({ get }) => {
    const id = get(selectedCategoryState);
    if (id === "default") {
      const response = await axios.get(
        "https://prod-app.fanddle.co.kr/gift/theme/list?type=answer",
        {
          headers: { Authorization: `Bearer ${BEARE_TOKEN}` },
        }
      );
      return response.data.data.themes;
    } else {
      const response = await axios.get(
        `https://prod-app.fanddle.co.kr/gift/theme/list?categoryUid=${id}`,
        {
          headers: { Authorization: `Bearer ${BEARE_TOKEN}` },
        }
      );
      return response.data.data.themes;
    }
  },
});

export const recomendCategoryDetailSelector = selector({
  key: `recomendCategoryDetailSelector/${v1()}`,
  get: async ({ get }) => {
    const id = get(selectedRecomendCategoryState);
    if (id === "default") {
      const response = await axios.get("https://prod-app.fanddle.co.kr/gift/answer/template?", {
        headers: { Authorization: `Bearer ${BEARE_TOKEN}` },
      });
      return response.data.data.giftCelebAnswerTemplates;
    } else {
      const response = await axios.get(
        `https://prod-app.fanddle.co.kr/gift/answer/template?categoryUid=${id}`,
        {
          headers: { Authorization: `Bearer ${BEARE_TOKEN}` },
        }
      );
      return response.data.data.giftCelebAnswerTemplates;
    }
  },
});
export const recomendSelector = selector({
  key: `recomendSelector/${v1()}`,
  get: async () => {
    const response = await axios.get("https://prod-app.fanddle.co.kr/gift/answer/template?", {
      headers: { Authorization: `Bearer ${BEARE_TOKEN}` },
    });
    return response.data.data.giftCelebAnswerTemplates;
  },
});
export const recomendCategorySelector = selector({
  key: `recomendCategorySelector/${v1()}`,
  get: async () => {
    const response = await axios.get(
      "https://prod-app.fanddle.co.kr/gift/answer/template/categories",
      {
        headers: { Authorization: `Bearer ${BEARE_TOKEN}` },
      }
    );
    return response.data.data;
  },
});
