import { atom } from "recoil";
import { v1 } from "uuid";

type ModalComponentType = {
  mode: "recomededMessage" | "theme";
};
type MiniModalComponentType = {
  mode: "complete" | "question";
};
type StateType = "defualt" | string;

export const ModalOpenValueState = atom<boolean>({
  key: `ModalOpenValueState/${v1()}`,
  default: false,
});
export const MiniModalOpenValueState = atom<boolean>({
  key: `MiniModalOpenValueState/${v1()}`,
  default: false,
});

export const ModalModeState = atom<ModalComponentType>({
  key: `ModalModeState/${v1()}`,
  default: { mode: "recomededMessage" },
});
export const MiniModalModeState = atom<MiniModalComponentType>({
  key: `MiniModalModeState/${v1()}`,
  default: { mode: "question" },
});

export const selectedCategoryState = atom<StateType>({
  key: `selectedCategoryState/${v1()}`,
  default: "default",
});
export const selectedRecomendCategoryState = atom<StateType>({
  key: `selectedRecomendCategoryState/${v1()}`,
  default: "default",
});
export const selectedThemeState = atom<StateType>({
  key: `selectedThemeState/${v1()}`,
  default: "default",
});
export const selectedRecomendedState = atom<StateType>({
  key: `selectedRecomendedState/${v1()}`,
  default: "default",
});
export const selectedImageUrl = atom<StateType>({
  key: `selectedImageUrl/${v1()}`,
  default: "default",
});
export const selectedRecomendedTemplate = atom<StateType>({
  key: `selectedRecomendedTemplate/${v1()}`,
  default: "",
});
