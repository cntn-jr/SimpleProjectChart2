import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { AuthApi } from "../../api/AuthApi";
import { isAuthAtom } from "../../recoil/isAuthAtom";
import { loginLoadingAtom } from "../../recoil/loginLoadingAtom";

export const useAuth = () => {
    const navigate = useNavigate();
    const { login, logout } = AuthApi();
    const [isAuth, setIsAuth] = useRecoilState(isAuthAtom);
    const [loading, setLoading] = useRecoilState(loginLoadingAtom);

    const loginMutation = useMutation(login, {
        onError: () => {
            console.log("is error");
        },
        onSuccess: () => {
            setIsAuth(true);
            navigate("/ganttchart", { replace: true });
        },
        onSettled: () => {
            setLoading(false);
        },
    });

    const logoutMutation = useMutation(logout, {
        onError: () => {
            console.log("is error");
        },
        onSuccess: () => {
            setIsAuth(false);
            navigate("/login", { replace: true });
        },
    });

    return { loginMutation, logoutMutation };
};
