import { Task } from "gantt-task-react";
import { atom } from "recoil";

export const scheduleAtom = atom({
    key: "scheduleAtom",
    default: <Task>{
        start: new Date(),
        end: new Date(),
        name: "",
        id: "Task 0",
        type: "task",
        progress: 100,
    },
});
