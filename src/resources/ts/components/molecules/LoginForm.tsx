import LoginIcon from "@mui/icons-material/Login";
import { TextField } from "@mui/material";
import { useLoginForm } from "../../hooks/User/useLoginForm";
import { FormCard } from "../atoms/FormCard";
import { FullWidthButton } from "../atoms/FullWidthButton";

export const LoginForm = () => {
    const { changeEmail, changePassword, onClickLogin, isLoadingLogin } = useLoginForm();
    return (
        <FormCard>
            <TextField
                type="email"
                label="Email"
                fullWidth
                required
                margin="normal"
                onChange={changeEmail}
                disabled={isLoadingLogin}
            />
            <TextField
                type="password"
                label="Password"
                fullWidth
                required
                margin="normal"
                onChange={changePassword}
                disabled={isLoadingLogin}
            />
            <FullWidthButton startIcon={<LoginIcon />} onClick={onClickLogin}>
                LOG IN
            </FullWidthButton>
        </FormCard>
    );
};
