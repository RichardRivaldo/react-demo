import { Typography } from "@mui/material";
import { PerformanceData } from "../types/ai-agents";

export const AIMetrics = (props: { data: PerformanceData }) => {
  const { data } = props;
  return (
    <Typography variant="body2" fontWeight={500}>
      Accuracy: {data.accuracy.toFixed(1)}%
    </Typography>
  );
};
