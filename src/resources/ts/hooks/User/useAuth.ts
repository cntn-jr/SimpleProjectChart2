import { useMutation } from "react-query";
import { useRecoilState } from "recoil";
import { AuthApi } from "../../api/AuthApi";
import { isAuthAtom } from "../../recoil/isAuthAtom";

export const useAuth = () => {
    const { login } = AuthApi();
    const [isAuth, setIsAuth] = useRecoilState(isAuthAtom);

    const loginMutation = useMutation(login, {
        onError: () => {
            console.log("is error");
        },
        onSuccess: () => {
            setIsAuth(true);
        },
    });

    return { loginMutation };
};
