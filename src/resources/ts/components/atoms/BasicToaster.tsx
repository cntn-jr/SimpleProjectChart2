import { Alert, AlertColor, Snackbar } from "@mui/material";
import { useRecoilState } from "recoil";
import { toastAtom } from "../../recoil/toastAtom";

type Props = {
    severity: AlertColor;
    message: string;
};

export const BasicToaster = (props: Props) => {
    const { severity, message } = props;
    const [open, setOpen] = useRecoilState(toastAtom);
    const onClose = () => {
        setOpen(false);
    };
    return (
        <Snackbar
            open={open}
            autoHideDuration={10000}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            onClose={onClose}
        >
            <Alert severity={severity}>{message}</Alert>
        </Snackbar>
    );
};
