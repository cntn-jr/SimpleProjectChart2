import { blue } from "@mui/material/colors";
import {
    Gantt,
    Task,
    EventOption,
    StylingOption,
    ViewMode,
    DisplayOption,
} from "gantt-task-react";
import { useGantt } from "../../hooks/Gantt/useGantt";

export const GanttChartContent = () => {
    const { getGanttQuery } = useGantt();
    const { data } = getGanttQuery();
    const viewDate = new Date();
    viewDate.setDate(viewDate.getDate() + -4);
    return (
        <Gantt
            tasks={data!}
            listCellWidth=""
            ganttHeight={500}
            viewDate={viewDate}
            todayColor={blue[200]}
            barProgressColor={blue[600]}
            // onClick={onClickTask}
        />
    );
};
