export type ResultsData = DayResults[];

export interface DayResults {
  id: number;
  name: string;
  date: string;
  matches: Match[];
}

interface Match {
  home: string;
  away: string;
  homeScorers: string[];
  awayScorers: string[];
}

export interface PositionData {
  team: string;
  played: number;
  won: number;
  lost: number;
  drawn: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

export interface ScorerData {
  name: string;
  goals: number;
  team: string;
}
