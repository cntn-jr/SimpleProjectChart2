import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
    disabled?: boolean;
    fullWidth?: boolean;
    onClick: () => void;
};

export const CancelButton = (props: Props) => {
    const { disabled = false, fullWidth = true, onClick } = props;
    return (
        <Button
            type="button"
            fullWidth={fullWidth}
            variant="contained"
            startIcon={<CloseIcon />}
            color="secondary"
            disabled={disabled}
            onClick={onClick}
        >
            CANCEL
        </Button>
    );
};
