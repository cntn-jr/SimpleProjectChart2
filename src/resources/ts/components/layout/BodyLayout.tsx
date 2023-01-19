import { Container, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Router } from "../../router/Router";
import { Copyright } from "../organisms/Copyright";
import { Sidebar } from "../organisms/Sidebar";

export const BodyLayout = () => {
    return (
        <Grid mt="60px" display="flex" container spacing={0}>
            <Grid
                item
                sx={{
                    height: "100vh",
                }}
                xs={3}
            >
                <Sidebar />
            </Grid>
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
                    <Router />
                    <Copyright />
                </Container>
            </Grid>
        </Grid>
    );
};