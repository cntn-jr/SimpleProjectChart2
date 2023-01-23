import { AppBar, Box, Typography } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router";

export const HeaderLayout = () => {
    const [subTitle, setSubTitle] = useState("SubTitle");
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
