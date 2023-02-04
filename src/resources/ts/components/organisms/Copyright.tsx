import { Typography } from "@mui/material";

export const Copyright = () => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" mt="50px">
            <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
            2023 Yoshihiko Chihara
        </Typography>
    );
};
