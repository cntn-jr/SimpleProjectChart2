import { Button } from "@mui/material";
import { blue } from "@mui/material/colors";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    onClick: () => void;
};

export const BasicButton = (props: Props) => {
    const { children, onClick } = props;
    return (
        <Button
            type="button"
            variant="contained"
            sx={{ backgroundColor: blue[600], width: "100px" }}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};
