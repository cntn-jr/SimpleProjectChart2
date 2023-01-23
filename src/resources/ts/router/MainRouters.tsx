import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SettingsIcon from "@mui/icons-material/Settings";

import { GanttChart } from "../components/pages/GanttChart";
import { Login } from "../components/pages/Login";
import { Setting } from "../components/pages/Setting";
import { Signup } from "../components/pages/Signup";

export const MainRouters = {
    login: {
        path: "/login",
        name: "Log in",
        children: <Login />,
        icon: <LoginIcon />,
        authenticate: false,
    },
    signup: {
        path: "/signup",
        name: "Sign up",
        children: <Signup />,
        icon: <PersonAddIcon />,
        authenticate: false,
    },
    ganttchart: {
        path: "/ganttchart",
        name: "Gantt Chart",
        children: <GanttChart />,
        icon: <AccountTreeIcon />,
        authenticate: true,
    },
    setting: {
        path: "/setting",
        name: "Setting",
        children: <Setting />,
        icon: <SettingsIcon />,
        authenticate: true,
    },
};
