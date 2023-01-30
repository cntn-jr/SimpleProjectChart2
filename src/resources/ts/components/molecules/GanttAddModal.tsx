import { Stack, TextField } from "@mui/material";
import { BasicModal } from "../atoms/BasicModal";
import { FullWidthButton } from "../atoms/FullWidthButton";
import AddIcon from "@mui/icons-material/Add";

type Props = {
    open: boolean;
    onClose: () => void;
};

export const GanttAddModal = (props: Props) => {
    const { open, onClose } = props;
    const today = new Date();
    const today_string = today.toISOString().split("T")[0];
    return (
        <BasicModal open={open} onClose={onClose}>
            <TextField
                type="text"
                label="Title"
                fullWidth
                required
                // onChange={changeEmail}
                // error={error}
                // disabled={loading}
            />
            <Stack direction="row">
                <TextField
                    type="date"
                    label="Start"
                    fullWidth
                    required
                    defaultValue={today_string}
                    // onChange={changeEmail}
                    // error={error}
                    // disabled={loading}
                />
                <TextField
                    type="date"
                    label="End"
                    fullWidth
                    required
                    defaultValue={today_string}
                    // onChange={changeEmail}
                    // error={error}
                    // disabled={loading}
                />
            </Stack>
            <FullWidthButton onClick={() => {}} startIcon={<AddIcon />}>
                CREATE
            </FullWidthButton>
        </BasicModal>
    );
};
