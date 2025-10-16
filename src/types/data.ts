export type PlayersData = Player[];

export interface Player {
  id: number;
  name: string;
  team: string;
  photo: string;
}

export type ResultsData = DayResults[];

export interface DayResults {
  id: number;
  name: string;
  date: string;
  mvp?: string;
  matches: Match[];
}

interface Match {
  home: string;
  away: string;
  homeScorers: string[] | null;
  awayScorers: string[] | null;
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
