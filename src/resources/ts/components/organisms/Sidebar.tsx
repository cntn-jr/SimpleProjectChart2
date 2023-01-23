import {
    createTheme,
    ListItemIcon,
    ListItemText,
    MenuItem,
    MenuList,
    Stack,
    ThemeProvider,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useMatch, useNavigate } from "react-router";
import { MainRouters } from "../../router/MainRouters";

const sidebarTheme = createTheme({
    components: {
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    height: "80px",
                    color: grey[600],
                },
                selected: {
                    backgroundColor: grey[200],
                },
            },
        },
    },
});

export const Sidebar = () => {
    const authentication = true;
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
        <ThemeProvider theme={sidebarTheme}>
            <Stack direction="row" mt="10px">
                <MenuList sx={{ width: "100%" }}>
                    {Object.values(MainRouters).map((route) =>
                        route.authenticate === authentication ? (
                            <MenuItem
                                onClick={() => onClickMenu(route.path)}
                                key={route.path}
                                selected={isSelectRoute(route.path)}
                            >
                                <ListItemIcon>{route.icon}</ListItemIcon>
                                <ListItemText primary={route.name} />
                            </MenuItem>
                        ) : null
                    )}
                </MenuList>
            </Stack>
        </ThemeProvider>
    );
};
