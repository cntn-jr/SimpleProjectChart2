import { AlertColor } from "@mui/material";
import { atom } from "recoil";

type toastType = {
    open: boolean;
    severity: AlertColor;
    message: string;
};

export const toastAtom = atom({
    key: "toastAtom",
    default: <toastType>{
        open: false,
        severity: "success",
        message: "",
    },
});
