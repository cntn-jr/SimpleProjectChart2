import { Backdrop, CircularProgress } from "@mui/material";
import { useRecoilValue } from "recoil";
import { isBackdropAtom } from "../../recoil/isBackdropAtom";

export const FullDisplaySpinner = () => {
    const open = useRecoilValue(isBackdropAtom);
    return (
        <Backdrop
            sx={{
                // modalのz-index + 1
                zIndex: "1301",
            }}
            open={open}
        >
            <CircularProgress color="info" />
        </Backdrop>
    );
};
