import { Stack, Typography } from "@mui/material";
import { BasicModal } from "../atoms/BasicModal";
import { CancelButton } from "../atoms/CancelButton";
import { DeleteButton } from "../atoms/DeleteButton";
import { FullWidthButton } from "../atoms/FullWidthButton";

type Props = {
    open: boolean;
    onClose: () => void;
    onClickDelete: () => void;
};

export const DeleteModal = (props: Props) => {
    const { open, onClose, onClickDelete } = props;

    return (
        <BasicModal open={open} onClose={onClose}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Confirmation of deletion
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Do you really want to delete it? Once deleted, it connot be
                undone.
            </Typography>
            <Stack direction="row" spacing="10px">
                <DeleteButton onClick={onClickDelete} />
                <CancelButton onClick={onClose} />
            </Stack>
        </BasicModal>
    );
};
