import LoginIcon from "@mui/icons-material/Login";
import { TextField } from "@mui/material";
import { useLoginForm } from "../../hooks/User/useLoginForm";
import { FormCard } from "../atoms/FormCard";
import { FullWidthButton } from "../atoms/FullWidthButton";

export const LoginForm = () => {
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
            />
            <TextField
                type="password"
                label="Password"
                fullWidth
                required
                margin="normal"
                onChange={changePassword}
            />
            <FullWidthButton startIcon={<LoginIcon />} onClick={onClickLogin}>
                LOG IN
            </FullWidthButton>
        </FormCard>
    );
};
