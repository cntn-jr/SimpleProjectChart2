import { useMutation } from "react-query";
import { AuthApi } from "../../api/AuthApi";

export const useAuth = () => {
    const { login } = AuthApi();

    const loginMutation = useMutation(login, {
        onError: () => {
            console.log("is error");
        },
        onSuccess: () => {
            console.log("is success");
        },
    });

    return { loginMutation };
};
