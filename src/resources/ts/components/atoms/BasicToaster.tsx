import { Alert, AlertColor, Snackbar } from "@mui/material";
import { useRecoilState } from "recoil";
import { toastAtom } from "../../recoil/toastAtom";

export const BasicToaster = () => {
    const [toast, setToast] = useRecoilState(toastAtom);
    const onClose = () => {
        setToast((old) => {
            return {
                ...old,
                open: false,
            };
        });
    };
    return (
        <Snackbar
            open={toast.open}
            autoHideDuration={8000}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            onClose={onClose}
        >
            <Alert severity={toast.severity} onClose={onClose}>
                {toast.message}
            </Alert>
        </Snackbar>
    );
};
