import { Container, Grid, MenuItem, Select, TextField } from "@mui/material";
import { useMemo, useState } from "react";
import { AIAgent } from "../types/ai-agents";
import { AIAgentCard } from "./AIAgentCard";

export interface AIAgentsListProps {
  agents: AIAgent[];
}

export const AIAgentsList = (props: AIAgentsListProps) => {
  const { agents } = props;
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>();

  const caps = ["Recommendation", "Forecasting", "Recognition"];
  const allCapabilities = useMemo(() => caps, [caps]);

  const filteredAgents = agents.filter((agent) => {
    const searched = agent.name.toLowerCase().includes(search);
    const filtered = !filter || agent.capabilities.includes(filter);
    return searched && filtered;
  });

  return (
    <Container maxWidth="lg">
      <TextField
        label="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Select
        value={filter}
        label="Filter Capabilities"
        onChange={(e) => setFilter(e.target.value)}
      >
        <MenuItem key={"all"} value={""}>
          All Capabilities
        </MenuItem>
        {allCapabilities.map((c) => (
          <MenuItem key={c} value={c}>
            {c}
          </MenuItem>
        ))}
      </Select>
      <Grid container spacing={2}>
        {filteredAgents.map((agent) => (
          <Grid key={agent.id}>
            <AIAgentCard data={agent} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
