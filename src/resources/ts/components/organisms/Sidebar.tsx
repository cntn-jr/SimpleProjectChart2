import { MenuItem, MenuList, Stack } from "@mui/material";
import { useNavigate } from "react-router";
import { MainRouters } from "../../router/MainRouters";

export const Sidebar = () => {
    const authentication = true;
    const navigate = useNavigate();
    const onClickMenu = (path: string) => {
        navigate(path);
    };
    return (
        <Stack direction="row" mt="10px">
            <MenuList sx={{ width: "100%" }}>
                {Object.values(MainRouters).map((route) =>
                    route.authenticate === authentication ? (
                        <MenuItem
                            onClick={() => onClickMenu(route.path)}
                            key={route.path}
                            sx={{ height: "80px" }}
                        >
                            {route.name}
                        </MenuItem>
                    ) : null
                )}
            </MenuList>
        </Stack>
    );
};
