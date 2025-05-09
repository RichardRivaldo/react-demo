export interface PerformanceData {
    accuracy: number
}

export interface AIAgent {
    id: string;
    name: string;
    capabilities: string[];
    isActive: boolean;
    metrics: PerformanceData;
    createdAt: string;
}

interface RecommendationAgent<T> extends AIAgent {
    threshold: T
}
