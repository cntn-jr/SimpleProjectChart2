import { MenuItem, MenuList, Stack } from "@mui/material";
import { MainRouters } from "../../router/MainRouters";

export const Sidebar = () => {
    const authentication = true;

    return (
        <Stack direction="row" mt="10px">
            <MenuList sx={{ width: "100%" }}>
                {Object.values(MainRouters).map((route) =>
                    route.authenticate === authentication ? (
                        <MenuItem key={route.path} sx={{ height: "80px" }}>
                            {route.name}
                        </MenuItem>
                    ) : null
                )}
            </MenuList>
        </Stack>
    );
};
