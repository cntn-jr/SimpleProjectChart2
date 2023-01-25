import { Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Page404 } from "../components/pages/Page404";
import { isAuthAtom } from "../recoil/isAuthAtom";
import { MainRouters } from "./MainRouters";

export const Router = () => {
    const [isAuth, setIsAuth] = useRecoilState(isAuthAtom);

    return (
        <Routes>
            {Object.values(MainRouters).map((route) =>
                route.authenticate === isAuth ? (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.children}
                    />
                ) : null
            )}
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
};
