import { Route, Routes } from "react-router-dom";
import { Page404 } from "../components/pages/Page404";
import { getAuth } from "../util/getAuth";
import { MainRouters } from "./MainRouters";

export const Router = () => {
    const authentication = getAuth();
    return (
        <Routes>
            {Object.values(MainRouters).map((route) =>
                route.authenticate === authentication ? (
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
