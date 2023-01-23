import { Stack } from "@mui/material";
import { ReactNode } from "react";

type Props = { children: ReactNode };

export const FormCard = (props: Props) => {
    const { children } = props;
    return (
        <Stack
            component="form"
            spacing="30px"
            sx={{
                width: "60%",
                backgroundColor: "#fff",
                mt: "40px",
                mx: "auto",
                px: "10px",
                py: "20px",
                borderRadius: "5px",
            }}
        >
            {children}
        </Stack>
    );
};
