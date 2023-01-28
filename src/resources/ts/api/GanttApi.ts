import axios from "axios";
import { Task } from "gantt-task-react";

export const GanttApi = () => {
    const getGantt = async () => {
        const { data } = await axios.get<Array<Task>>("api/ganttchart/get");
        return data;
    };
    return { getGantt };
};
