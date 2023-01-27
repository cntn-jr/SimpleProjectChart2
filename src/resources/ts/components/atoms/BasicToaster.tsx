import { Alert, AlertColor, Snackbar } from "@mui/material";
import { useRecoilState } from "recoil";
import { toastAtom } from "../../recoil/toastAtom";

export const BasicToaster = () => {
    const [toast, setToast] = useRecoilState(toastAtom);
    const onClose = () => {
        setToast(() => {
            return {
                open: false,
                severity: "success",
                message: "",
            };
        });
    };
    return (
        <Snackbar
            open={toast.open}
            autoHideDuration={10000}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            onClose={onClose}
        >
            <Alert severity={toast.severity} onClose={onClose}>
                {toast.message}
            </Alert>
        </Snackbar>
    );
};
