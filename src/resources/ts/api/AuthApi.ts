import axios from "axios";

export const AuthApi = () => {

    const loginPreparing = () => {
        return new Promise(() => {
            axios.get("/sanctum/csrf-cookie");
        });
    };

    const login = async ({
        email,
        password,
    }: {
        email: string;
        password: string;
    }) => {
        const { data } = await axios.post("api/login", { email, password });
        return data;
    };

    const logout = async () => {
        const { data } = await axios.post("api/logout");
        return data;
    };

    return { loginPreparing, login, logout };
};
