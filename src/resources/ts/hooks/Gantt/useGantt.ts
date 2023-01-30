import { useQuery } from "react-query";
import { GanttApi } from "../../api/GanttApi";

export const useGantt = () => {
    const { getGantt } = GanttApi();
    const getGanttQuery = () => {
        return useQuery("gantt", getGantt);
    };
    return { getGanttQuery };
};
