import LoginIcon from "@mui/icons-material/Login";
import { Alert, Snackbar, TextField } from "@mui/material";
import { useRecoilValue } from "recoil";
import { useLoginForm } from "../../hooks/User/useLoginForm";
import { errorAtom } from "../../recoil/errorAtom";
import { loginLoadingAtom } from "../../recoil/loginLoadingAtom";
import { ErrorAlert } from "../atoms/ErrorAlert";
import { FormCard } from "../atoms/FormCard";
import { FullWidthButton } from "../atoms/FullWidthButton";

export const LoginForm = () => {
    const loading = useRecoilValue(loginLoadingAtom);
    const error = useRecoilValue(errorAtom);
    const { changeEmail, changePassword, onClickLogin } = useLoginForm();
    return (
        <FormCard>
            <ErrorAlert open={error} message="Please enter correct value." />
            <TextField
                type="email"
                label="Email"
                fullWidth
                required
                margin="normal"
                onChange={changeEmail}
                error={error}
                disabled={loading}
            />
            <TextField
                type="password"
                label="Password"
                fullWidth
                required
                margin="normal"
                onChange={changePassword}
                error={error}
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
