import { Button } from "@mui/material";
import { blue } from "@mui/material/colors";
import { ReactNode } from "react";

type Props = {
    startIcon?: ReactNode;
    children: ReactNode;
    onClick: () => void;
};

export const FullWidthButton = (props: Props) => {
    const { startIcon = null, children, onClick } = props;
    return (
        <Button
            type="button"
            fullWidth
            variant="contained"
            startIcon={startIcon}
            sx={{ backgroundColor: blue[600] }}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};
