import { Stack, TextField } from "@mui/material";
import { BasicModal } from "../atoms/BasicModal";
import { FullWidthButton } from "../atoms/FullWidthButton";
import AddIcon from "@mui/icons-material/Add";
import { useScheduleAtom } from "../../hooks/Gantt/useScheduleAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import { scheduleAtom } from "../../recoil/scheduleAtom";
import { useGantt } from "../../hooks/Gantt/useGantt";
import { isBackdropAtom } from "../../recoil/isBackdropAtom";
import { useMemo } from "react";

type Props = {
    open: boolean;
    onClose: () => void;
};

export const GanttAddModal = (props: Props) => {
    const { open, onClose } = props;
    const today = new Date();
    const today_string = today.toISOString().split("T")[0];
    const { changeName, changeStart, changeEnd } = useScheduleAtom();
    const schedule = useRecoilValue(scheduleAtom);
    const [isBackdrop, setIsBackDrop] = useRecoilState(isBackdropAtom);
    const { createGanttMutation } = useGantt();
    const onClickCreate = () => {
        setIsBackDrop(true);
        createGanttMutation.mutate({
            name: schedule.name,
            start: schedule.start,
            end: schedule.end,
        });
        onClose();
    };

    const disabled = useMemo(() => {
        if (schedule.name && schedule.start && schedule.end) return false;
        return true;
    }, [schedule]);

    return (
        <BasicModal open={open} onClose={onClose}>
            <TextField
                type="text"
                label="Title"
                fullWidth
                required
                onChange={changeName}
                // error={error}
                disabled={isBackdrop}
            />
            <Stack direction="row">
                <TextField
                    type="date"
                    label="Start"
                    fullWidth
                    required
                    defaultValue={today_string}
                    onChange={changeStart}
                    // error={error}
                    disabled={isBackdrop}
                />
                <TextField
                    type="date"
                    label="End"
                    fullWidth
                    required
                    defaultValue={today_string}
                    onChange={changeEnd}
                    // error={error}
                    disabled={isBackdrop}
                />
            </Stack>
            <FullWidthButton
                onClick={onClickCreate}
                startIcon={<AddIcon />}
                loading={isBackdrop}
                disabled={disabled}
            >
                CREATE
            </FullWidthButton>
        </BasicModal>
    );
};
