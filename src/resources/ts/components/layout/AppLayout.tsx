import {
    AppBar,
    Container,
    createTheme,
    Grid,
    ThemeProvider,
    Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import { BodyLayout } from "./BodyLayout";
import { HeaderLayout } from "./HeaderLayout";

export const AppLayout = () => {
    const theme = createTheme();
    return (
        <ThemeProvider theme={theme}>
            <Box display="flex">
                <HeaderLayout />
                <BodyLayout />
            </Box>
        </ThemeProvider>
    );
};
