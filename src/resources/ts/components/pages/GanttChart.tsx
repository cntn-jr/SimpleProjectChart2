import { Typography } from "@mui/material";
import {
    Gantt,
    Task,
    EventOption,
    StylingOption,
    ViewMode,
    DisplayOption,
} from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import { useGantt } from "../../hooks/Gantt/useGantt";

export const GanttChart = () => {
    const { getGanttQuery } = useGantt();
    const { data } = getGanttQuery();

    return (
        <Gantt
            tasks={data!}
            listCellWidth=""
            ganttHeight={500}
            // viewDate={displayDate}
            todayColor="rgba(2, 62, 138, 0.5)"
            // onClick={onClickTask}
        />
    );
};
