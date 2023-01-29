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
