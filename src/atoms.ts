import { atom } from "recoil";

export const ModalOpenValueState = atom({
  key: "ModalOpenValueState",
  default: false,
});

export const selectedImageUrl = atom({
  key: "selectedImageUrl",
  default: "default",
});
