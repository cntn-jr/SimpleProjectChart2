import {
    createTheme,
    ListItemIcon,
    ListItemText,
    MenuItem,
    MenuList,
    Stack,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useMatch, useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { isAuthAtom } from "../../recoil/isAuthAtom";
import { MainRouters } from "../../router/MainRouters";

export const Sidebar = () => {
    const [isAuth, setIsAuth] = useRecoilState(isAuthAtom);
    const navigate = useNavigate();
    const onClickMenu = (path: string) => {
        navigate(path);
    };
    const isSelectRoute = (path: string) => {
        if (useMatch(path)) {
            return true;
        }
        return false;
    };

    return (
        <Stack direction="row" mt="10px">
            <MenuList sx={{ width: "100%" }}>
                {Object.values(MainRouters).map((route) =>
                    route.authenticate === isAuth ? (
                        <MenuItem
                            onClick={() => onClickMenu(route.path)}
                            key={route.path}
                            selected={isSelectRoute(route.path)}
                            sx={{
                                height: "80px",
                                color: grey[600],
                            }}
                        >
                            <ListItemIcon>{route.icon}</ListItemIcon>
                            <ListItemText primary={route.name} />
                        </MenuItem>
                    ) : null
                )}
            </MenuList>
        </Stack>
    );
};
