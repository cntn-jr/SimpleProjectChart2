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

export const AppLayout = () => {
    const theme = createTheme();
    return (
        <ThemeProvider theme={theme}>
            <Box display="flex">
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
                <Grid mt="60px" display="flex" container spacing={0}>
                    <Grid
                        item
                        sx={{
                            height: "100vh",
                        }}
                        xs={3}
                    ></Grid>
                    <Grid
                        component="main"
                        item
                        container
                        sx={{
                            height: "100vh",
                            backgroundColor: grey[100],
                        }}
                        xs={9}
                    >
                        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                            {/* Rooter */}
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                align="center"
                            >
                                Copyright
                            </Typography>
                        </Container>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
};
