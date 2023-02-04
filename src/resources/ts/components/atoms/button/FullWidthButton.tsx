import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { blue } from "@mui/material/colors";
import { ReactNode } from "react";

type Props = {
    startIcon?: ReactNode;
    children: ReactNode;
    disabled?: boolean;
    loading?: boolean;
    onClick: () => void;
};

export const FullWidthButton = (props: Props) => {
    const {
        startIcon = null,
        children,
        disabled = false,
        loading = false,
        onClick,
    } = props;
    return (
        <LoadingButton
            type="button"
            fullWidth
            variant="contained"
            startIcon={startIcon}
            sx={{ backgroundColor: blue[600] }}
            disabled={disabled}
            loading={loading}
            onClick={onClick}
        >
            {children}
        </LoadingButton>
    );
};
