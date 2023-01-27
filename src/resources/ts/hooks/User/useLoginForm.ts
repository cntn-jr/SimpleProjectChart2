import axios from "axios";
import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { loginLoadingAtom } from "../../recoil/loginLoadingAtom";
import { userAtom } from "../../recoil/userAtom";
import { useAuth } from "./useAuth";

export const useLoginForm = () => {
    const [user, setUser] = useRecoilState(userAtom);
    const [loading, setLoading] = useRecoilState(loginLoadingAtom);
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
        setLoading(true);
        axios
            .get("/sanctum/csrf-cookie")
            .then(() => {
                loginMutation.mutate({
                    email: user.email,
                    password: user.password,
                });
            })
            .catch(() => {
                setLoading(false);
            });
    };
    return {
        changeEmail,
        changePassword,
        resetPassword,
        resetUser,
        onClickLogin,
    };
};
