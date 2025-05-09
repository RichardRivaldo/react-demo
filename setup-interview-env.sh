#!/bin/bash

# Script to set up the interview environment for pair coding assessment
# Creates a React TypeScript project with necessary dependencies

# Set up colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Creating Interview Environment for AI Agent Development Assessment${NC}"

# Define the project directory name
PROJECT_DIR="ai-agent-assessment"
TEMPLATES_DIR="../templates"

# Create the project
echo -e "${GREEN}Setting up React TypeScript project...${NC}"
npx create-react-app $PROJECT_DIR --template typescript

# Navigate to project directory
cd $PROJECT_DIR

# Install additional dependencies needed for the assessment
echo -e "${GREEN}Installing additional dependencies...${NC}"
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material styled-components @types/styled-components

# Copy template files
echo -e "${GREEN}Copying template files...${NC}"
mkdir -p src/types
mkdir -p src/components
mkdir -p src/utils
mkdir -p src/prompts

# Copy template files (if they exist)
if [ -f "$TEMPLATES_DIR/AgentTypes.ts" ]; then
  cp "$TEMPLATES_DIR/AgentTypes.ts" src/types/
fi

if [ -f "$TEMPLATES_DIR/AgentCard.tsx" ]; then
  cp "$TEMPLATES_DIR/AgentCard.tsx" src/components/
fi

if [ -f "$TEMPLATES_DIR/AgentUtils.ts" ]; then
  cp "$TEMPLATES_DIR/AgentUtils.ts" src/utils/
fi

if [ -f "$TEMPLATES_DIR/PromptExamples.md" ]; then
  cp "$TEMPLATES_DIR/PromptExamples.md" src/prompts/
fi

# Create a sample data file
echo -e "${GREEN}Creating sample data file...${NC}"
cat > src/data/sampleAgents.ts << EOL
// Sample data for AI Agents (to be expanded during the interview)
export const sampleAgents = [
  {
    id: '1',
    name: 'Content Writer',
    capabilities: ['text generation', 'editing', 'summarization'],
    isActive: true,
    metrics: {
      tasksCompleted: 145,
      averageRating: 4.8,
      responseTime: '1.2s'
    },
    createdAt: new Date('2024-12-01')
  },
  {
    id: '2',
    name: 'Data Analyzer',
    capabilities: ['data processing', 'visualization', 'pattern recognition'],
    isActive: false,
    metrics: {
      tasksCompleted: 78,
      averageRating: 4.5,
      responseTime: '2.1s'
    },
    createdAt: new Date('2025-01-15')
  }
];
EOL

# Create a README for the project
echo -e "${GREEN}Creating project README...${NC}"
cat > README.md << EOL
# AI Agent Assessment Project

This project was set up for a technical pair programming interview.

## Available Tasks

### Part 1: TypeScript Fundamentals
- Create TypeScript interfaces for AI Agent data structures
- Implement filtering functions for agents by capabilities

### Part 2: UI Implementation
- Create a React component for displaying an Agent Card
- Add interaction elements like an activation toggle

### Part 3: AI Prompting
- Design effective prompts for generating agent descriptions
- Create prompts for testing and development purposes

## Available Scripts

- \`npm start\`: Run the development server
- \`npm test\`: Run tests
- \`npm build\`: Build for production

## Project Structure
- \`src/types/\`: TypeScript interfaces and type definitions
- \`src/components/\`: React components
- \`src/utils/\`: Utility functions
- \`src/prompts/\`: Example AI prompts
- \`src/data/\`: Sample data for development
EOL

# Create directories if they don't exist
mkdir -p src/data

echo -e "${GREEN}Setup complete! Project created at ./$PROJECT_DIR${NC}"
echo -e "${YELLOW}Start the development server with:${NC}"
echo -e "cd $PROJECT_DIR && npm start"
