import axios from "axios";

export const AuthApi = () => {
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
    return { login };
};
