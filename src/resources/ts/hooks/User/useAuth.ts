import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { AuthApi } from "../../api/AuthApi";
import { errorAtom } from "../../recoil/errorAtom";
import { isAuthAtom } from "../../recoil/isAuthAtom";
import { loginLoadingAtom } from "../../recoil/loginLoadingAtom";
import { toastAtom } from "../../recoil/toastAtom";
import { userAtom } from "../../recoil/userAtom";

export const useAuth = () => {
    const navigate = useNavigate();
    const { login, logout } = AuthApi();
    const [user, setUser] = useRecoilState(userAtom);
    const [isAuth, setIsAuth] = useRecoilState(isAuthAtom);
    const [loading, setLoading] = useRecoilState(loginLoadingAtom);
    const [error, setError] = useRecoilState(errorAtom);
    const [toast, setToast] = useRecoilState(toastAtom);

    const loginMutation = useMutation(login, {
        onError: () => {
            setError(true);
        },
        onSuccess: () => {
            setIsAuth(true);
            navigate("/ganttchart", { replace: true });
            setToast({
                open: true,
                severity: "success",
                message: "Successfully logged in.",
            });
            setError(false);
            setUser(() => {
                return {
                    id: 0,
                    first_name: "",
                    last_name: "",
                    email: "",
                    password: "",
                };
            });
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
