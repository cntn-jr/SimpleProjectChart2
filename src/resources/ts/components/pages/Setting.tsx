import { Stack } from "@mui/material";
import { useAuth } from "../../hooks/User/useAuth";
import { FullWidthButton } from "../atoms/FullWidthButton";

export const Setting = () => {
    const { logoutMutation } = useAuth();
    const onClickLogout = () => {
        logoutMutation.mutate();
    };
    return (
        <Stack direction="row" mt="10px">
            <FullWidthButton
                onClick={onClickLogout}
                loading={logoutMutation.isLoading}
            >
                LOG OUT
            </FullWidthButton>
        </Stack>
    );
};
