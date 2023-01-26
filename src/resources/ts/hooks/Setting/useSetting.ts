import { AuthApi } from "../../api/AuthApi";
import { useAuth } from "../User/useAuth";

export const useSetting = () => {
    const { logoutMutation } = useAuth();
    const { loginPreparing } = AuthApi();
    const onClickLogout = () => {
        loginPreparing().then(() => {
            logoutMutation.mutate();
        });
    };
    return { onClickLogout };
};
