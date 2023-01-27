import { Alert, AlertColor, Snackbar } from "@mui/material";

type Props = {
    open: boolean;
    severity: AlertColor;
    message: string;
};

export const BasicToaster = (props: Props) => {
    const { open, severity, message } = props;
    return (
        <Snackbar
            open={open}
            autoHideDuration={10000}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
            <Alert severity={severity}>{message}</Alert>
        </Snackbar>
    );
};
