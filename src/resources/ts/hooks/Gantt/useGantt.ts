import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { GanttApi } from "../../api/GanttApi";
import { errorAtom } from "../../recoil/errorAtom";
import { isBackdropAtom } from "../../recoil/isBackdropAtom";
import { scheduleAtom } from "../../recoil/scheduleAtom";
import { toastAtom } from "../../recoil/toastAtom";

export const useGantt = () => {
    const { getGantt, createGantt } = GanttApi();
    const navigate = useNavigate();
    const queryClient = useQueryClient()
    const [toast, setToast] = useRecoilState(toastAtom);
    const [isBackdrop, setIsBackdrop] = useRecoilState(isBackdropAtom);
    const [schedule, setSchedule] = useRecoilState(scheduleAtom);
    const [error, setError] = useRecoilState(errorAtom);
    const getGanttQuery = () => {
        return useQuery("gantt", getGantt);
    };

    const createGanttMutation = useMutation(createGantt, {
        onError: () => {
        },
        onSuccess: () => {
            queryClient.invalidateQueries('gantt')
            setError(false);
            setToast({
                open: true,
                severity: "success",
                message: "Successfully create schedule.",
            });
        },
        onSettled: () => {
            setSchedule({
                start: new Date(),
                end: new Date(),
                name: "",
                id: "Task 0",
                type: "task",
                progress: 100,
            });
            setIsBackdrop(false);
        },
    });

    return { getGanttQuery, createGanttMutation };
};
