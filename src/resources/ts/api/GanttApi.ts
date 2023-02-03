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

    const createGantt = async ({
        name,
        start,
        end,
    }: {
        name: string;
        start: Date;
        end: Date;
    }) => {
        const start_string = start.toISOString().split("T")[0];
        const end_string = end.toISOString().split("T")[0];
        const { data } = await axios.post("api/ganttchart/store", {
            name,
            start: start_string,
            end: end_string,
        });
        return data;
    };

    const updateGantt = async ({
        id,
        name,
        start,
        end,
    }: {
        id: string;
        name: string;
        start: Date;
        end: Date;
    }) => {
        const start_string = start.toISOString().split("T")[0];
        const end_string = end.toISOString().split("T")[0];
        const { data } = await axios.put("api/ganttchart/update", {
            id,
            name,
            start: start_string,
            end: end_string,
        });
        return data;
    };

    const deleteGantt = async ({
        id,
    }: {
        id: string;
    }) => {
        const { data } = await axios.put("api/ganttchart/delete", {
            id,
        });
        return data;
    };
    return { getGantt, createGantt, updateGantt, deleteGantt };
};
