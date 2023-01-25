import { atom } from "recoil";

export const isAuthAtom = atom({
    key: "isAuthAtom",
    default: <boolean>false,
});
