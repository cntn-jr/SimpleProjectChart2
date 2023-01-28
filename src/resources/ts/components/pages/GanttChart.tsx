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
import { useEffect, useState } from "react";
import { useGantt } from "../../hooks/Gantt/useGantt";

export const GanttChart = () => {
    const { getGanttQuery } = useGantt();
    const { data } = getGanttQuery();
    let [tasks, setTasks] = useState<Array<Task>>([
        {
            type: "task",
            start: new Date(2020, 1, 1),
            end: new Date(2020, 1, 2),
            name: "Idea",
            id: "Task 1",
            progress: 100,
        },
    ]);
    useEffect(() => {
        let newTasks: Task[] = [];
        data!.forEach((task) => {
            let newTask = {
                ...task,
                start: new Date(task.start),
                end: new Date(task.end),
            };
            newTasks.push(newTask);
        });
        setTasks([...newTasks]);
    }, []);

    return (
        <Gantt
            tasks={tasks}
            listCellWidth=""
            ganttHeight={500}
            // viewDate={displayDate}
            todayColor="rgba(2, 62, 138, 0.5)"
            // onClick={onClickTask}
        />
    );
};
