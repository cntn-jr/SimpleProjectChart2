import { Stack } from "@mui/material";
import { useRecoilState } from "recoil";
import { useAuth } from "../../hooks/User/useAuth";
import { isBackdropAtom } from "../../recoil/isBackdropAtom";
import { FullWidthButton } from "../atoms/FullWidthButton";

export const Setting = () => {
    const { logoutMutation } = useAuth();
    const [isBackdrop, setIsBackdrop] = useRecoilState(isBackdropAtom);
    const onClickLogout = () => {
        setIsBackdrop(true);
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
