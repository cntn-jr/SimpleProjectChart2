import { LoadingButton } from "@mui/lab";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

type Props = {
    fullWidth?: boolean;
    disabled?: boolean;
    loading?: boolean;
    onClick: () => void;
};

export const DeleteButton = (props: Props) => {
    const {
        fullWidth = true,
        disabled = false,
        loading = false,
        onClick,
    } = props;
    return (
        <LoadingButton
            type="button"
            fullWidth={fullWidth}
            variant="contained"
            startIcon={<DeleteForeverIcon />}
            color="error"
            disabled={disabled}
            loading={loading}
            onClick={onClick}
        >
            DELETE
        </LoadingButton>
    );
};
