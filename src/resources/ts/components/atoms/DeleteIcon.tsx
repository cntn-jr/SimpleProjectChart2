import { DeleteModal } from "../molecules/DeleteModal";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { IconButton } from "@mui/material";
import { useState } from "react";

type Props = {
    disabled?: boolean;
    deleteFunction: () => void;
};

export const DeleteIcon = (props: Props) => {
    const { disabled = false, deleteFunction } = props;
    const [open, setOpen] = useState<boolean>(false);
    const onClick = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <IconButton
                type="button"
                size="small"
                sx={{ width: "30px" }}
                disabled={disabled}
                onClick={onClick}
            >
                <DeleteForeverIcon />
            </IconButton>
            <DeleteModal
                open={open}
                onClose={onClose}
                onClickDelete={deleteFunction}
            />
        </>
    );
};
