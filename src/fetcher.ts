import axios from "axios";
import { atom, selector } from "recoil";
import { v1 } from "uuid";

const BEARE_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVpZCI6ImRhZWU2YmI5LTEwZmEtNDZmMC04ZDk0LTdlMjdkODY3NzdjOSJ9LCJhY2NvdW50Ijp7InVpZCI6IjJlOTM3OWExLTJmZjEtNDU1MC05OTkwLWVlZGFkZmNjYjNkOCJ9LCJpYXQiOjE2NzI2NTY5OTEsImV4cCI6MTY3NTI0ODk5MSwiaXNzIjoiZmFuZGRsZSIsInN1YiI6ImF1dGgifQ.IplI76PV-fbzeeAC9PKcvenJKO9LqV2SsVq1AtnHJ3Q";

export const selectedCategoryState = atom({
  key: "selectedCategoryState",
  default: "default",
});
export const selectedRecomendCategoryState = atom({
  key: "selectedRecomendCategoryState",
  default: "default",
});

export const selectedThemeState = atom({
  key: "selectedThemeState",
  default: "default",
});
export const selectedRecomendedState = atom({
  key: "selectedRecomendedState",
  default: "default",
});

export const ReceivedMessageSelector = selector({
  key: `ReceivedMessageSelector/${v1()}`,
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
    const response = await axios.get(
      "https://prod-app.fanddle.co.kr/gift/theme/list?type=answer",
      {
        headers: { Authorization: `Bearer ${BEARE_TOKEN}` },
      }
    );
    return response.data.data.themes;
  },
});
export const recomendSelector = selector({
  key: `recomendSelector/${v1()}`,
  get: async () => {
    const response = await axios.get(
      "https://prod-app.fanddle.co.kr/gift/answer/template?",
      {
        headers: { Authorization: `Bearer ${BEARE_TOKEN}` },
      }
    );
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

export const themeCategorySelector = selector({
  key: `themeCategorySelector/${v1()}`,
  get: async () => {
    const response = await axios.get(
      "https://prod-app.fanddle.co.kr/gift/theme/categories",
      {
        headers: { Authorization: `Bearer ${BEARE_TOKEN}` },
      }
    );
    return response.data.data;
  },
});

export const recomendCategoryDetailSelector = selector({
  key: `recomendCategoryDetailSelector/${v1()}`,
  get: async ({ get }) => {
    const id = get(selectedRecomendCategoryState);
    if (id === "default") {
      const response = await axios.get(
        "https://prod-app.fanddle.co.kr/gift/answer/template?",
        {
          headers: { Authorization: `Bearer ${BEARE_TOKEN}` },
        }
      );
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
