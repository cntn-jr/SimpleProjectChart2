import { Box, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import {
    Gantt,
    Task,
    EventOption,
    StylingOption,
    ViewMode,
    DisplayOption,
} from "gantt-task-react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { useGantt } from "../../hooks/Gantt/useGantt";
import { scheduleAtom } from "../../recoil/scheduleAtom";
import { BasicButton } from "../atoms/button/BasicButton";
import { GanttAddModal } from "../molecules/GanttAddModal";
import { GanttUpdateModal } from "../molecules/GanttUpdateModal";

export const GanttChartContent = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [openSchedule, setOpenSchedule] = useState<boolean>(false);
    const [schedule, setSchedule] = useRecoilState(scheduleAtom);
    const { getGanttQuery } = useGantt();
    const { data } = getGanttQuery();
    const viewDate = new Date();
    viewDate.setDate(viewDate.getDate() + -4);
    const onOpen = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const onOpenSchedule = (task: Task) => {
        setSchedule(task);
        setOpenSchedule(true);
    };
    const onCloseSchedule = () => {
        setOpenSchedule(false);
        setSchedule({
            start: new Date(),
            end: new Date(),
            name: "",
            id: "Task 0",
            type: "task",
            progress: 100,
        });
    };
    return (
        <>
            <Box width="100px" mb="20px">
                <BasicButton onClick={onOpen}>ADD</BasicButton>
            </Box>
            {data?.length ? (
                <Gantt
                    tasks={data!}
                    listCellWidth=""
                    viewDate={viewDate}
                    todayColor={blue[200]}
                    barProgressColor={blue[600]}
                    onClick={onOpenSchedule}
                />
            ) : (
                <Box sx={{ width: "100%", mt: "50px" }}>
                    <Typography
                        component="h3"
                        variant="h4"
                        textAlign="center"
                        color={grey[700]}
                    >
                        Let's add a schedule!!
                    </Typography>
                    <Typography
                        component="h3"
                        variant="h6"
                        mt="10px"
                        textAlign="center"
                        color={grey[700]}
                    >
                        Press the Add button to display a adding schedule modal.
                    </Typography>
                </Box>
            )}

            <GanttAddModal open={open} onClose={onClose} />
            <GanttUpdateModal open={openSchedule} onClose={onCloseSchedule} />
        </>
    );
};
