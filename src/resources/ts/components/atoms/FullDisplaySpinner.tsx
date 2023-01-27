import { Backdrop, CircularProgress } from "@mui/material";
import { useRecoilValue } from "recoil";
import { isBackdropAtom } from "../../recoil/isBackdropAtom";

export const FullDisplaySpinner = () => {
    const open = useRecoilValue(isBackdropAtom);
    return (
        <Backdrop
            sx={{
                zIndex: 100,
            }}
            open={open}
        >
            <CircularProgress color="info" />
        </Backdrop>
    );
};
