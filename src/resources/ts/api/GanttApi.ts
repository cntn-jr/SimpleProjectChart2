import axios from "axios";
import { Task } from "gantt-task-react";

export const GanttApi = () => {
    const getGantt = async () => {
        const { data } = await axios.get<Array<Task>>("api/ganttchart/get");
        // startとendをDate型に変換する
        let newTasks: Task[] = [];
        data!.forEach((task) => {
            let newTask = {
                ...task,
                start: new Date(task.start),
                end: new Date(task.end),
            };
            newTasks.push(newTask);
        });
        return newTasks;
    };
    return { getGantt };
};
