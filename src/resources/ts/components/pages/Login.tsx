import LoginIcon from "@mui/icons-material/Login";
import {
    Box,
    Button,
    TextField,
} from "@mui/material";
import { blue } from "@mui/material/colors";

export const Login = () => {
    return (
        <Box
            component="form"
            sx={{
                width: "60%",
                backgroundColor: "#fff",
                mt: "40px",
                mx: "auto",
                padding: "10px",
                borderRadius: "5px",
            }}
        >
            <TextField
                type="email"
                label="Email"
                fullWidth
                required
                margin="normal"
            />
            <TextField
                type="password"
                label="Password"
                fullWidth
                required
                margin="normal"
            />
            <Button
                type="button"
                fullWidth
                variant="contained"
                startIcon={<LoginIcon />}
                sx={{ mt: "15px", mb: "10px", backgroundColor: blue[600] }}
            >
                LOG IN
            </Button>
        </Box>
    );
};
