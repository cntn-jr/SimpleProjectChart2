import LoginIcon from "@mui/icons-material/Login";
import { TextField } from "@mui/material";
import { FormCard } from "../atoms/FormCard";
import { FullWidthButton } from "../atoms/FullWidthButton";

export const LoginForm = () => {
    return (
        <FormCard>
            <TextField
                type="email"
                label="Email"
                fullWidth
                required
                margin="normal"
            />
            <TextField
                type="password"
                label="Password"
                fullWidth
                required
                margin="normal"
            />
            <FullWidthButton startIcon={<LoginIcon />} onClick={() => {}}>
                LOG IN
            </FullWidthButton>
        </FormCard>
    );
};
