import { useAuth } from "../User/useAuth";

export const useSetting = () => {
    const { logoutMutation } = useAuth();

    const onClickLogout = () => {
        logoutMutation.mutate();
    };
    return { onClickLogout };
};
