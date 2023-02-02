import { Typography } from "@mui/material";
import { BasicModal } from "../atoms/BasicModal";

type Props = {
    open: boolean;
    onClose: () => void;
    onClickDelete: () => void;
};

export const DeleteModal = (props: Props) => {
    const { open, onClose } = props;

    return (
        <BasicModal open={open} onClose={onClose}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Confirmation of deletion
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Do you really want to delete it? Once deleted, it connot be
                undone.
            </Typography>
        </BasicModal>
    );
};
