import { Alert, Snackbar } from "@mui/material";

type Props = {
    open: boolean;
    message: string;
};

export const ErrorAlert = (props: Props) => {
    const { open, message } = props;
    return (
        <Snackbar
            open={open}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
            <Alert severity="error">{message}</Alert>
        </Snackbar>
    );
};
