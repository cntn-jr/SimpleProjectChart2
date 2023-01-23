import { AppBar, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { MainRouters } from "../../router/MainRouters";
import { getAuth } from "../../util/getAuth";

export const HeaderLayout = () => {
    const authenticate = getAuth();
    const [subTitle, setSubTitle] = useState("");
    const { pathname } = useLocation();

    useEffect(() => {
        const castedPathname = pathname.slice(1);
        const arrayMainRouters = Object.entries(MainRouters);
        const showRoute = arrayMainRouters.find(([key, value]) => {
            return key == castedPathname;
        });
        if (showRoute && showRoute[1].authenticate === authenticate)
            setSubTitle(showRoute[1].name);
        else setSubTitle("Page Not Found");
    }, [pathname]);
    return (
        <AppBar position="absolute">
            <Box height="60px" display="flex">
                <Typography
                    component="h1"
                    variant="h5"
                    pt="20px"
                    pb="10px"
                    pl="80px"
                    fontWeight="bold"
                >
                    ProjectA
                </Typography>
                <Typography
                    component="h3"
                    variant="h6"
                    pt="20px"
                    pb="10px"
                    mx="auto"
                >
                    {subTitle}
                </Typography>
            </Box>
        </AppBar>
    );
};
