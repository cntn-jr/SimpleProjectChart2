import { atom } from "recoil";
import { User } from "../types/User";

export const userAtom = atom({
    key: "userAtom",
    default: <User>{
        id: 0,
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    },
});
