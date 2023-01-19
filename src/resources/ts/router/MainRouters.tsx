import { GanttChart } from "../components/pages/GanttChart";
import { Login } from "../components/pages/Login";
import { Setting } from "../components/pages/Setting";
import { Signup } from "../components/pages/Signup";

export const MainRouters = {
    login: {
        path: "/login",
        name: "Log in",
        children: <Login />,
        icon: <></>,
        authenticate: false,
    },
    signup: {
        path: "/signup",
        name: "Sign up",
        children: <Signup />,
        icon: <></>,
        authenticate: false,
    },
    ganttchart: {
        path: "/ganttchart",
        name: "Gantt Chart",
        children: <GanttChart />,
        icon: <></>,
        authenticate: true,
    },
    setting: {
        path: "/setting",
        name: "Setting",
        children: <Setting />,
        icon: <></>,
        authenticate: true,
    },
};
