import { Stack, TextField } from "@mui/material";
import { BasicModal } from "../atoms/BasicModal";
import { FullWidthButton } from "../atoms/FullWidthButton";
import CheckIcon from "@mui/icons-material/Check";
import { useScheduleAtom } from "../../hooks/Gantt/useScheduleAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import { scheduleAtom } from "../../recoil/scheduleAtom";
import { useGantt } from "../../hooks/Gantt/useGantt";
import { isBackdropAtom } from "../../recoil/isBackdropAtom";
import { useMemo } from "react";
import { DeleteIcon } from "../atoms/DeleteIcon";

type Props = {
    open: boolean;
    onClose: () => void;
};

export const GanttUpdateModal = (props: Props) => {
    const { open, onClose } = props;
    const { changeName, changeStart, changeEnd } = useScheduleAtom();
    const schedule = useRecoilValue(scheduleAtom);
    const [isBackdrop, setIsBackDrop] = useRecoilState(isBackdropAtom);
    const { updateGanttMutation, deleteGanttMutation } = useGantt();
    const onClickUpdate = () => {
        setIsBackDrop(true);
        updateGanttMutation
            .mutateAsync({
                id: schedule.id,
                name: schedule.name,
                start: schedule.start,
                end: schedule.end,
            })
            .then(() => {
                onClose();
            });
    };

    const deleteFunction = () => {
        deleteGanttMutation.mutateAsync({ id: schedule.id }).then(() => {
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
                error={updateGanttMutation.isError}
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
                    error={updateGanttMutation.isError}
                    disabled={isBackdrop}
                />
                <TextField
                    type="date"
                    label="End"
                    fullWidth
                    required
                    defaultValue={schedule.end.toISOString().split("T")[0]}
                    onChange={changeEnd}
                    error={updateGanttMutation.isError}
                    disabled={isBackdrop}
                />
            </Stack>
            <FullWidthButton
                onClick={onClickUpdate}
                startIcon={<CheckIcon />}
                loading={isBackdrop}
                disabled={disabled}
            >
                UPDATE
            </FullWidthButton>
            <DeleteIcon deleteFunction={deleteFunction} />
        </BasicModal>
    );
};
