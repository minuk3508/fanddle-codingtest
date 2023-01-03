import axios from "axios";
import { selector } from "recoil";
import { v1 } from "uuid";

const BEARE_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVpZCI6ImRhZWU2YmI5LTEwZmEtNDZmMC04ZDk0LTdlMjdkODY3NzdjOSJ9LCJhY2NvdW50Ijp7InVpZCI6IjJlOTM3OWExLTJmZjEtNDU1MC05OTkwLWVlZGFkZmNjYjNkOCJ9LCJpYXQiOjE2NzI2NTY5OTEsImV4cCI6MTY3NTI0ODk5MSwiaXNzIjoiZmFuZGRsZSIsInN1YiI6ImF1dGgifQ.IplI76PV-fbzeeAC9PKcvenJKO9LqV2SsVq1AtnHJ3Q";

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

export const themeCategorySelector = selector({
  key: `themeCategorySelector/${v1()}`,
  get: async () => {
    const response = await axios.get(
      "https://prod-app.fanddle.co.kr/gift/theme/categories",
      {
        headers: { Authorization: `Bearer ${BEARE_TOKEN}` },
      }
    );
    return response.data;
  },
});

export const themeCategoryDetailSelector = selector({
  key: `themeCategoryDetailSelector/${v1()}`,
  get: async () => {
    const response = await axios.get(
      "https://prod-app.fanddle.co.kr/gift/theme/list?categoryUid=3eb9daba-982c-4543-abce-7e917e463479",
      {
        headers: { Authorization: `Bearer ${BEARE_TOKEN}` },
      }
    );
    return response.data;
  },
});
