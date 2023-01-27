import axios from "axios";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { userAtom } from "../../recoil/userAtom";
import { useAuth } from "./useAuth";

export const useLoginForm = () => {
    const [user, setUser] = useRecoilState(userAtom);
    const [isLoadingLogin, setIsLoadingLogin] = useState<boolean>(false);
    const { loginMutation } = useAuth();
    const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setUser((oldUser) => {
            return { ...oldUser, email: e.target.value };
        });
    };
    const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setUser((oldUser) => {
            return { ...oldUser, password: e.target.value };
        });
    };
    const resetPassword = () => {
        setUser((oldUser) => {
            return { ...oldUser, password: "" };
        });
    };
    const resetUser = () => {
        setUser(() => {
            return {
                id: 0,
                first_name: "",
                last_name: "",
                email: "",
                password: "",
            };
        });
    };
    const onClickLogin = () => {
        setIsLoadingLogin(true);
        axios
            .get("/sanctum/csrf-cookie")
            .then(() => {
                loginMutation.mutate({
                    email: user.email,
                    password: user.password,
                });
            })
            .finally(() => {
                setIsLoadingLogin(false);
            });
    };
    return {
        changeEmail,
        changePassword,
        resetPassword,
        resetUser,
        onClickLogin,
        isLoadingLogin
    };
};
