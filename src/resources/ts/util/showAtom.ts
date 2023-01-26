import { useRecoilState } from "recoil";
import { userAtom } from "../recoil/userAtom";

export const showAtom = () => {
    const [user] = useRecoilState(userAtom);
    const showUser = () => {
        console.log(user);
    };
    return { showUser };
};
