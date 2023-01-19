import { MenuItem, MenuItemProps, MenuList, Stack } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { styled } from "@mui/system";
import { useMatch, useNavigate } from "react-router";
import { MainRouters } from "../../router/MainRouters";

const SidebarMenuItem = styled(MenuItem)<MenuItemProps>(({ selected }) => ({
    height: "80px",
    color: selected ? blue[300] : grey[800],
}));

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
        <Stack direction="row" mt="10px">
            <MenuList sx={{ width: "100%" }}>
                {Object.values(MainRouters).map((route) =>
                    route.authenticate === authentication ? (
                        <SidebarMenuItem
                            onClick={() => onClickMenu(route.path)}
                            key={route.path}
                            sx={{ height: "80px" }}
                            selected={isSelectRoute(route.path)}
                        >
                            {route.name}
                        </SidebarMenuItem>
                    ) : null
                )}
            </MenuList>
        </Stack>
    );
};
