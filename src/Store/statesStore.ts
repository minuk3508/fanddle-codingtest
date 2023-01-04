import { atom } from "recoil";
import { v1 } from "uuid";

type ModalComponentType = {
  mode: "recomededMessage" | "theme";
};

export const ModalOpenValueState = atom({
  key: `ModalOpenValueState/${v1()}`,
  default: false,
});
export const ModalModeState = atom<ModalComponentType>({
  key: `ModalModeState/${v1()}`,
  default: { mode: "recomededMessage" },
});

export const selectedImageUrl = atom({
  key: `selectedImageUrl/${v1()}`,
  default: "default",
});

export const selectedRecomendedTemplate = atom({
  key: `selectedRecomendedTemplate/${v1()}`,
  default: "",
});
