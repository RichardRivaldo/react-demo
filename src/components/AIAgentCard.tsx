import { Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import { AIAgent } from "../types/ai-agents";
import { AICapabilitiesDescriptor } from "./AICapabilitiesDescriptor";
import { AIMetrics } from "./AIMetrics";

export const AIAgentCard = (props: { data: AIAgent }) => {
  const { data } = props;
  return (
    <Card variant="outlined" sx={{ borderRadius: 2, p: 2, maxWidth: 400 }}>
      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6">{data.name}</Typography>
            <Chip
              label={data.isActive ? "Active" : "Inactive"}
              color={data.isActive ? "success" : "error"}
              size="small"
            />
          </Stack>

          <AIMetrics data={data.metrics} />

          <AICapabilitiesDescriptor data={data.capabilities} />
        </Stack>
      </CardContent>
    </Card>
  );
};
