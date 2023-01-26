import axios from "axios";
import { useMutation } from "react-query";
import { useRecoilState } from "recoil";
import { AuthApi } from "../../api/AuthApi";
import { isAuthAtom } from "../../recoil/isAuthAtom";

export const useAuth = () => {
    const { login, logout } = AuthApi();
    const [isAuth, setIsAuth] = useRecoilState(isAuthAtom);

    const loginMutation = useMutation(login, {
        onError: () => {
            console.log("is error");
        },
        onSuccess: () => {
            setIsAuth(true);
            axios.get("api/login_user").then((res) => {
                console.log(res.data);
            });
        },
    });

    const logoutMutation = useMutation(logout, {
        onError: () => {
            axios.get("api/login_user").then((res) => {
                console.log(res.data);
            });
            console.log("is error");
            setIsAuth(false);
        },
        onSuccess: () => {
            setIsAuth(false);
        },
    });

    return { loginMutation, logoutMutation };
};
