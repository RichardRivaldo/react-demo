import "./App.css";
import { AIAgentsList } from "./components/AIAgentsList";
import { AIAgent } from "./types/ai-agents";

function App() {
  const aiAgents: AIAgent[] = [
    {
      id: "1",
      name: "AI Agent 1",
      capabilities: ["Recommendation", "Forecasting"],
      isActive: true,
      metrics: { accuracy: 99 },
      createdAt: "2025-12-01",
    },
    {
      id: "2",
      name: "AI Agent 2",
      capabilities: ["Forecasting", "Recognition"],
      isActive: true,
      metrics: { accuracy: 75 },
      createdAt: "2025-11-01",
    },
  ];

  return (
    <div className="App">
      <AIAgentsList agents={aiAgents} />
    </div>
  );
}

export default App;
