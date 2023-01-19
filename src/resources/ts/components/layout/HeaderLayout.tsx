import { AppBar, Box, Typography } from "@mui/material";

export const HeaderLayout = () => {
    return (
        <AppBar position="absolute">
            <Box height="60px">
                <Typography
                    component="h1"
                    variant="h5"
                    pt="20px"
                    pb="10px"
                    pl="20px"
                >
                    ProjectA
                </Typography>
            </Box>
        </AppBar>
    );
};