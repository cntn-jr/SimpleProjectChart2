import axios from "axios";

export const GanttApi = () => {
    const getGantt = async () => {
        const { data } = await axios.get("api/ganttchart/get");
        return data;
    };
    return { getGantt };
};
