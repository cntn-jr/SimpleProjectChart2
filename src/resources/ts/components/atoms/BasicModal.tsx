import { IconButton, Modal, Stack } from "@mui/material";
import { ReactNode } from "react";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
};

export const BasicModal = (props: Props) => {
    const { open, onClose, children } = props;
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Stack
                width="50%"
                sx={{
                    mt: "50px",
                    mx: "auto",
                    px: "20px",
                    py: "30px",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                }}
            >
                <Stack direction="row-reverse" mb="10px">
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Stack>
                <Stack spacing="30px">{children}</Stack>
            </Stack>
        </Modal>
    );
};
