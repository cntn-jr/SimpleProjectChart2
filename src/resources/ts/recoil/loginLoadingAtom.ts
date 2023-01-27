import { atom } from "recoil";

export const loginLoadingAtom = atom({
    key: "loginLoadingAtom",
    default: <boolean>false,
});
