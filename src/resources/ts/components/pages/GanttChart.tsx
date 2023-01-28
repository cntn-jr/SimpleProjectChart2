import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useGantt } from "../../hooks/Gantt/useGantt";

export const GanttChart = () => {
    const { getGanttQuery } = useGantt();
    const { data } = getGanttQuery();
    useEffect(() => {
        console.log(data);
    }, []);

    return (
        <Typography component="h1" color="teal">
            Gantt Chart
        </Typography>
    );
};
