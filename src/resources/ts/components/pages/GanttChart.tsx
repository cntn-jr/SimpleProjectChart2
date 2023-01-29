import { Box, CircularProgress } from "@mui/material";
import "gantt-task-react/dist/index.css";
import { memo, Suspense } from "react";
import { GanttChartContent } from "../organisms/GanttChartContent";

export const GanttChart = memo(() => {
    return (
        <Suspense
            fallback={
                <Box
                    sx={{
                        my: "80px",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <CircularProgress color="primary" />
                </Box>
            }
        >
            <GanttChartContent />
        </Suspense>
    );
});
