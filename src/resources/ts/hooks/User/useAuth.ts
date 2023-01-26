import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { AuthApi } from "../../api/AuthApi";
import { isAuthAtom } from "../../recoil/isAuthAtom";

export const useAuth = () => {
    const navigate = useNavigate();
    const { login, logout } = AuthApi();
    const [isAuth, setIsAuth] = useRecoilState(isAuthAtom);

    const loginMutation = useMutation(login, {
        onError: () => {
            console.log("is error");
        },
        onSuccess: () => {
            setIsAuth(true);
            navigate("/ganttchart", { replace: true });
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
