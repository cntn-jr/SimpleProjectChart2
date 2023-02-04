import { Stack, TextField } from "@mui/material";
import { BasicModal } from "../atoms/BasicModal";
import { FullWidthButton } from "../atoms/button/FullWidthButton";
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
    const { changeName, changeStart, changeEnd } = useScheduleAtom();
    const schedule = useRecoilValue(scheduleAtom);
    const [isBackdrop, setIsBackDrop] = useRecoilState(isBackdropAtom);
    const { createGanttMutation } = useGantt();
    const onClickCreate = () => {
        setIsBackDrop(true);
        createGanttMutation
            .mutateAsync({
                name: schedule.name,
                start: schedule.start,
                end: schedule.end,
            })
            .then(() => {
                onClose();
            });
    };

    const disabled = useMemo(() => {
        if (schedule.name && schedule.start && schedule.end) {
            if (schedule.start.getTime() <= schedule.end.getTime()) {
                return false;
            }
        }
        return true;
    }, [schedule]);

    return (
        <BasicModal open={open} onClose={onClose}>
            <TextField
                type="text"
                label="Title"
                fullWidth
                required
                defaultValue={schedule.name}
                onChange={changeName}
                error={createGanttMutation.isError}
                disabled={isBackdrop}
            />
            <Stack direction="row">
                <TextField
                    type="date"
                    label="Start"
                    fullWidth
                    required
                    defaultValue={schedule.start.toISOString().split("T")[0]}
                    onChange={changeStart}
                    error={createGanttMutation.isError}
                    disabled={isBackdrop}
                />
                <TextField
                    type="date"
                    label="End"
                    fullWidth
                    required
                    defaultValue={schedule.end.toISOString().split("T")[0]}
                    onChange={changeEnd}
                    error={createGanttMutation.isError}
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
