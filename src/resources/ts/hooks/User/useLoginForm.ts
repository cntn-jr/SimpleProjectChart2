import axios from "axios";
import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { isBackdropAtom } from "../../recoil/isBackdropAtom";
import { loginLoadingAtom } from "../../recoil/loginLoadingAtom";
import { userAtom } from "../../recoil/userAtom";
import { useAuth } from "./useAuth";

export const useLoginForm = () => {
    const [user, setUser] = useRecoilState(userAtom);
    const [loading, setLoading] = useRecoilState(loginLoadingAtom);
    const [isBackdrop, setIsBackdrop] = useRecoilState(isBackdropAtom);
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
    const onClickLogin = () => {
        setIsBackdrop(true);
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
                setIsBackdrop(false);
            });
    };
    return {
        changeEmail,
        changePassword,
        resetPassword,
        onClickLogin,
    };
};
