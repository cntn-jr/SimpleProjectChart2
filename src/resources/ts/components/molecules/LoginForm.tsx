import LoginIcon from "@mui/icons-material/Login";
import { TextField } from "@mui/material";
import { useRecoilValue } from "recoil";
import { useLoginForm } from "../../hooks/User/useLoginForm";
import { loginLoadingAtom } from "../../recoil/loginLoadingAtom";
import { FormCard } from "../atoms/FormCard";
import { FullWidthButton } from "../atoms/FullWidthButton";

export const LoginForm = () => {
    const loading = useRecoilValue(loginLoadingAtom);
    const { changeEmail, changePassword, onClickLogin } = useLoginForm();
    return (
        <FormCard>
            <TextField
                type="email"
                label="Email"
                fullWidth
                required
                margin="normal"
                onChange={changeEmail}
                disabled={loading}
            />
            <TextField
                type="password"
                label="Password"
                fullWidth
                required
                margin="normal"
                onChange={changePassword}
                disabled={loading}
            />
            <FullWidthButton
                startIcon={<LoginIcon />}
                loading={loading}
                onClick={onClickLogin}
            >
                LOG IN
            </FullWidthButton>
        </FormCard>
    );
};
