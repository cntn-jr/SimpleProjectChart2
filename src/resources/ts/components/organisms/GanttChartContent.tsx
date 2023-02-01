import { Box } from "@mui/material";
import { blue } from "@mui/material/colors";
import {
    Gantt,
    Task,
    EventOption,
    StylingOption,
    ViewMode,
    DisplayOption,
} from "gantt-task-react";
import { useState } from "react";
import { useGantt } from "../../hooks/Gantt/useGantt";
import { BasicButton } from "../atoms/BasicButton";
import { GanttAddModal } from "../molecules/GanttAddModal";

export const GanttChartContent = () => {
    const [open, setOpen] = useState<boolean>(false);
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
    return (
        <>
            <Box width="100px" mb="20px">
                <BasicButton onClick={onOpen}>ADD</BasicButton>
            </Box>
            <Gantt
                tasks={data!}
                listCellWidth=""
                ganttHeight={500}
                viewDate={viewDate}
                todayColor={blue[200]}
                barProgressColor={blue[600]}
                // onClick={onClickTask}
            />
            <GanttAddModal open={open} onClose={onClose} />
        </>
    );
};
