import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { scheduleAtom } from "../../recoil/scheduleAtom";

export const useScheduleAtom = () => {
    const [schedule, setSchedule] = useRecoilState(scheduleAtom);
    const changeName = (e: ChangeEvent<HTMLInputElement>) => {
        setSchedule((old) => {
            return { ...old, name: e.target.value };
        });
    };

    const changeStart = (e: ChangeEvent<HTMLInputElement>) => {
        setSchedule((old) => {
            return { ...old, start: new Date(e.target.value) };
        });
    };

    const changeEnd = (e: ChangeEvent<HTMLInputElement>) => {
        setSchedule((old) => {
            return { ...old, end: new Date(e.target.value) };
        });
    };

    return { changeName, changeStart, changeEnd };
};
