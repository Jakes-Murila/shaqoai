/** Contracts shared by ShaqoAI web clients and backend integrations. */
export type UserIntent = 'opportunities' | 'hiring';

export interface AgentStatusEvent {
  agentId: string;
  status: 'idle' | 'working' | 'blocked' | 'complete';
  occurredAt: string;
}

export interface OpportunityMatch {
  id: string;
  score: number;
  title: string;
  location?: string;
}
