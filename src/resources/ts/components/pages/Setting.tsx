import { Stack } from "@mui/material";
import { useSetting } from "../../hooks/Setting/useSetting";
import { FullWidthButton } from "../atoms/FullWidthButton";

export const Setting = () => {
    const { onClickLogout } = useSetting();
    return (
        <Stack direction="row" mt="10px">
            <FullWidthButton onClick={onClickLogout}>LOG OUT</FullWidthButton>
        </Stack>
    );
};
